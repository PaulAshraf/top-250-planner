import React, { useState } from "react";
import styled from "styled-components";

import MovieCard from '../Components/MovieCard'

import list from "../list.json";
import "../App.css";

function Main() {
  const [movieList, setMovieList] = useState(list.notseen.slice());
  const [movieListSeen, setMovieListSeen] = useState(list.seen.slice());
  const [num, setNum] = useState(1);

  function reshape(num) {

  let reShapedMovieList = [];
  let originalArr = list.notseen.slice();
  while (originalArr.length) reShapedMovieList.push(originalArr.splice(0, num));
  return reShapedMovieList

}

function seen(movie) {
  setMovieList(
    movieList.filter(
      (item) => item.index !== movie.index
    )
  );
  setMovieListSeen(movieListSeen.concat([movie]));
  console.log()
}

function shuffleMovies(movieList) {
  for (let i = movieList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [movieList[i], movieList[j]] = [movieList[j], movieList[i]];
  }
  return movieList.slice();
}
  
  return (
    <div>
      <h1>
        I want to finish IMDB's Top 250 movies in
        <input
          className="months"
          type="number"
          id="months"
          min="1"
          onChange={(e) => {
            setNum(Math.ceil((250 - movieListSeen.length) / (30 * e.target.value)));
            setMovieList(reshape(num));
          }}
        ></input>
        months
      </h1>
      <button onClick={() => setMovieList(shuffleMovies(movieList))}>
        Shuffle Order
      </button>
      <button onClick={() => setMovieList(list.notseen.slice())}>
        Order by rating
      </button>
      <br /> <br />
      {movieList.map((movieGroup, i) => {
          
        let today = new Date();
        if (i !== 0) {
          today.setDate(today.getDate() + i);
        }
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0");
        let yyyy = today.getFullYear();

        if(movieGroup.length){

        return (
          <div>
            <h3>{dd + "/" + mm + "/" + yyyy}</h3>

            <Container key={i}>
              {movieGroup.map((movie) => {
                return (
                  <MovieCard key={movie.index} movie={movie} seen={seen} />
                );
              })}
            </Container>
          </div>
        );
            }
            else{
                return(
                    <></>
                );
            }
      })}
      <br />
    </div>
  );
}



const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;



export default Main;
