import React, { useState } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import styled from "styled-components";

import list from "../list.json";
import "../App.css";

function Main() {
  const [movieList, setMovieList] = useState(list.notseen.slice());
  const [movieListSeen, setMovieListSeen] = useState(list.seen.slice());
  const [num, setNum] = useState(1);

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
            setMovieList(reshape(movieList.slice(), num));
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
console.log(movieList)
          
        let today = new Date();
        if (i !== 0) {
          today.setDate(today.getDate() + i);
        }
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0");
        let yyyy = today.getFullYear();

        if(!movieGroup[0]){
            console.log('here')
            setMovieList(reshape(movieList.slice(), num));
        }
            console.log(movieList)


        return (
          <div>
            <h3>{dd + "/" + mm + "/" + yyyy}</h3>

            <Container key={i}>
              {movieGroup.map((movie) => {
                return (
                  <div key={movie.index}>
                    <Card interactive={true} elevation={Elevation.FOUR}>
                      <MovieContainer>
                        <MoviePoster>
                          {/* <img src={movie.smallPosterLink} alt={movie.title} /> */}
                        </MoviePoster>
                        <MovieInfo>
                          <h3>{"#" + movie.index + ": " + movie.title}</h3>
                          {/* <p>{movie.overview}</p> */}
                          <Buttons>
                            <Button
                              intent="danger"
                              disabled={movie.ytLink === "NA"}
                              icon="video"
                            >
                              {" "}
                              <ButtonLink href={movie.ytLink}>
                                Watch Trailer
                              </ButtonLink>{" "}
                            </Button>
                            <Button intent="warning" icon="film">
                              <ButtonLink href={movie.imdbLink}>
                                {" "}
                                IMDB Page{" "}
                              </ButtonLink>
                            </Button>
                            <Button
                              intent="success"
                              icon="tick-circle"
                              onClick={() => {
                                setMovieList(
                                  movieList.filter(
                                    (item) => item.index !== movie.index
                                  )
                                );
                                setMovieListSeen(movieListSeen.concat([movie]));
                              }}
                            >
                              Seen This Movie{" "}
                            </Button>
                          </Buttons>
                        </MovieInfo>
                      </MovieContainer>
                    </Card>
                  </div>
                );
              })}
            </Container>
          </div>
        );
      })}
      <br />
    </div>
  );
}

function reshape(list, num) {
    console.log('reshape:    ', list)
    console.log('reshape:    ', num)

  let reShapedMovieList = [];
  while (list.length) reShapedMovieList.push(list.splice(0, num));
  console.log('after reshape:    ', reShapedMovieList)
  return reShapedMovieList;


}

function shuffleMovies(movieList) {
  for (let i = movieList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [movieList[i], movieList[j]] = [movieList[j], movieList[i]];
  }
  return movieList.slice();
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MovieContainer = styled.div`
  display: flex;
  margin: 1em;
  flex-basis: 33%;
`;

const MoviePoster = styled.div`
  flex-basis: 20%;
`;

const MovieInfo = styled.div`
  flex-basis: 80%;
`;
const Buttons = styled.div`
  display: flex;
`;
const ButtonLink = styled.a`
  text-decoration: none;
`;

export default Main;
