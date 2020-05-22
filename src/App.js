import React, {useState} from 'react';
import './App.css';

import Main from './Pages/Main'
import Welcome from './Pages/Welcome'

import list250 from "./list.json";

import axios from 'axios'
import cheerio from 'cheerio'

function App() {

  const [months, setMonths] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [listSelected, setListSelected] = useState('250')

  const [bar,setBar] = useState(false)
  const [prog,setProg] = useState(0)

function changeMonths(value) {
    setMonths(value)
}

function handleClick(){
  setClicked(true)
}

async function scrape(link){
  let header = {
    "X-Requested-With": "axios",
    "Origin":"http://localhost:3000/"
  }
  axios.get('https://cors-anywhere.herokuapp.com/' + link, header).then(function(html){
      let $ = cheerio.load(html, {});
      let list = {notseen: [], seen:[]};
      $('.seen-collection').filter(async function(){
        console.log('0')

        let tableRow = $(this).find('.lister-list').find('tr');
        let i = 0;
        tableRow.each(async function(){
          let self = $(this);
          i += 1;
          let smallPosterLink = self.find('.posterColumn').find('a').find('img').attr('src');
          let imdbLink = self.find('.titleColumn').find('a').attr('href');
          let id  = imdbLink.split('/')[2]
          let info = await getInfo(id)
          console.log(info)
          info.imdbLink = imdbLink
          info.smallPosterLink = smallPosterLink
          info.index = i
          list.notseen.push(info)
        })
      })
      return list
  }).catch(function(error){
    return {error: 'error in scrapping', errorStage:0}
  })
}

function getInfo(id){
  console.log('1')
  let apiKey = process.env.REACT_APP_TMDB_API_KEY
  let url1 = 'https://api.themoviedb.org/3/find/'+id+'?api_key='+apiKey+'&language=en-US&external_source=imdb_id'
  axios.get(url1).then(function(body){
    console.log('here')
    let res = JSON.parse(body).movie_results[0]
    let url2 = 'https://api.themoviedb.org/3/movie/'+res.id+'/videos?api_key='+apiKey+'&language=en-US'
    axios.get(url2).then(function(body){
        console.log(body)
        if (JSON.parse(body).results[0])
          res.ytLink = 'https://www.youtube.com/watch?v=' + JSON.parse(body).results[0]['key']
        else
          res.ytLink = 'NA'
        console.log(res)
        return res
    }).catch(function (error){
      return {error: 'error in TMDB youtube request',errorStage:2}
    }) 
  }).catch(function (error) {
    return {error: 'error in TMDB request', errorStage:1}
  })
}

function selectList(l){
  setBar(true)
  if(l === '250')
    setListSelected(list250)
  if(l === '100')
    setListSelected(scrape('https://www.imdb.com/chart/moviemeter/'))
  else
    setListSelected(scrape(l))
}

  return (
    <div className="App">
      {!clicked?
      <Welcome changeMonths={changeMonths} months={months} handleClick={handleClick} selectList={selectList}/>
      :
      <Main months={months} listSelected={listSelected}/>
      }
    </div>
  );
}




export default App;
