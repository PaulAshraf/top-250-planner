import React, {useState} from 'react';
import './App.css';

import Main from './Pages/Main'
import Welcome from './Pages/Welcome'

import axios from 'axios'
import cheerio from 'cheerio'

import list250 from "./list.json";


function App() {

  const [months, setMonths] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [listSelected, setListSelected] = useState('250')
  const [listObj, setListObj] = useState(list250)

  const [bar,setBar] = useState(false)
  const [prog,setProg] = useState(0)

function changeMonths(value) {
    setMonths(value)
}

function handleClick(){
  setClicked(true)
}

function handleBar(){
  setBar(true)
}



async function scrape(link){
      let html = await axios.get('https://mycorsbypass.herokuapp.com/' + encodeURIComponent(link))
      let $ = cheerio.load(html.data, {});
      let list = {notseen: [], seen:[]};
      $('.seen-collection').filter(function(){
        let tableRow = $(this).find('.lister-list').find('tr');
        tableRow.each(async function(i){
          let self = $(this);          
          let smallPosterLink = self.find('.posterColumn').find('a').find('img').attr('src');
          let imdbLink = self.find('.titleColumn').find('a').attr('href');
          let id  = imdbLink.split('/')[2]
         
          let apiKey = process.env.REACT_APP_TMDB_API_KEY
          let url1 = 'https://api.themoviedb.org/3/find/'+id+'?api_key='+apiKey+'&language=en-US&external_source=imdb_id'
          let res1 = await axios.get(url1)
          let info = res1.data.movie_results[0]
         
          let url2 = 'https://api.themoviedb.org/3/movie/'+info.id+'/videos?api_key='+apiKey+'&language=en-US'
          let res2 = await axios.get(url2)
          
          if (res2.data.results[0])
            info.ytLink = 'https://www.youtube.com/watch?v=' + res2.data.results[0]['key']
          else
            info.ytLink = 'NA'
          info.imdbLink = imdbLink
          info.smallPosterLink = smallPosterLink
          info.index = i 
          list.notseen.push(info)
          console.log(i / tableRow.length)
          setProg(i / tableRow.length)
        })
      })
      console.log('DONE')
      // setBar(false)
      return list
  
}


async function selectList(l){
  setBar(true)
  if(l === '250')
    setListObj(list250)
  if(l === '100'){
    let newList = await scrape('https://www.imdb.com/chart/moviemeter/')
    setListObj(newList)
    // setBar(false) 
  }
  else
    setListSelected(scrape(l))
}

  return (
    <div className="App">
      {!clicked?
      <Welcome changeMonths={changeMonths} months={months} handleClick={handleClick} selectList={selectList} bar={bar} prog={prog} handleBar={handleBar}/>
      :
      <Main months={months} listSelected={listObj}/>
      }
    </div>
  );
}




export default App;
