import React, { useState, useEffect } from "react";
import styled from "styled-components";

import MovieCard from '../Components/MovieCard'
import { Button } from "@blueprintjs/core";

import "../App.css";

function Main(props) {
  
  const list = props.listSelected
  const months = props.months

  const [movieList, setMovieList] = useState(list.notseen.slice());
  const [movieListSeen, setMovieListSeen] = useState(list.seen.slice());

  function reshape(num) {

  let reShapedMovieList = [];
  let originalArr = movieList.flat().slice();
  while (originalArr.length) reShapedMovieList.push(originalArr.splice(0, num));
  return reShapedMovieList

}

function seen(movie) {
  
  
  let arr = movieList.slice()

  arr.forEach((movieGroup, i) => {
    let newMovieGroup = movieGroup.filter(
      (item) => item.index !== movie.index
    );
    arr[i] = newMovieGroup
  });

  setMovieList(arr);

  setMovieListSeen(movieListSeen.concat([movie]));
  console.log(movieListSeen)
}

function shuffleMovies(movieList) {
  for (let i = movieList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [movieList[i], movieList[j]] = [movieList[j], movieList[i]];
  }
  return movieList.slice();
}

useEffect(() => {
  let num = Math.ceil((250 - movieListSeen.length) / (30 * months))
  setMovieList(reshape(num));
  }, [movieListSeen, months])
  
  return (
    <div>

      <Button onClick={() => setMovieList(shuffleMovies(movieList))}>
        Shuffle Order
      </Button>
      <Button onClick={() => setMovieList(list.notseen.slice())}>
        Order by rating
      </Button>
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
            <DateStyle>{dd + "/" + mm + "/" + yyyy}</DateStyle>

            <Container key={i}>
              {movieGroup.map((movie) => {
                return (
                  <MovieCard key={movie.index} movie={movie} seen={seen}/>
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

const DateStyle = styled.h2`
  color: white;
`



export default Main;
