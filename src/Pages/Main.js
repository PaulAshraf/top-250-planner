import React, {useState} from 'react';

import list from '../list.json'

function Main() {

  const [movieList, setMovieList] = useState(list.notseen.slice());
  const [movieListSeen, setMovieListSeen] = useState(list.seen.slice());
  const [num, setNum] = useState(1)
  
  return (
    <div>

        <h1>I want to finish IMDB's Top 250 movies in {' '} 
        <input className="months" type="number" id="months" min="1" onChange={(e) => setNum(Math.ceil(movieList.length / (30 * e.target.value)))}></input>
        {' '} months
        </h1> 

        <button onClick={() => setMovieList(shuffleMovies(movieList))}>Shuffle Order</button>
        {' '}
        <button onClick={() => setMovieList(list.notseen.slice())}>Order by rating</button>

        <br /> <br /> 

        <table>
        <tr> <th>Date</th> <th>Movie</th> <th>Poster</th> <th>{'    '}</th></tr>

        {movieList.map(

          (movie, i) => {

            let today = new Date()
            if(i % num === 0){
              today.setDate(today.getDate() + i / num)
            }
            let dd = String(today.getDate()).padStart(2, '0')
            let mm = String(today.getMonth() + 1).padStart(2, '0')
            let yyyy = today.getFullYear()

            return(
              <tr>
                {i % num === 0?<td rowSpan={num}>{dd + '/' + mm + '/' + yyyy}</td>:<></>}
                <td>{movie.name + ' (' + movie.year + ')'}</td>
                <td><img src={movie.poster} alt={movie.name} /></td>
                <td><button onClick={() => {setMovieList(movieList.filter(item => item.index !== movie.index));
                                            setMovieListSeen(movieListSeen.concat([movie]));
                                    }}>I saw this</button></td>
              </tr>
            )

          })}
          </table>

          <br />

          <table>
          <tr> <th>Movie</th> <th>Poster</th> </tr>

          {movieListSeen.map(

            (movie) => {

              return(
                <tr>
                  <td>{movie.name + ' (' + movie.year + ')'}</td>
                  <td><img src={movie.poster} alt={movie.name} /></td>
                </tr>
              )

            })}
            </table>

    </div>
  );
}

function shuffleMovies(movieList){
  for (let i = movieList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [movieList[i], movieList[j]] = [movieList[j],movieList[i]];
  }
  return movieList.slice()
}

export default Main;
