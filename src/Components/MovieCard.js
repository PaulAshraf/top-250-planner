import React from 'react'
import styled from "styled-components";

import { Button, Card, Elevation } from "@blueprintjs/core";


function MovieCard(props) {

    const movie = props.movie
    const seen = props.seen

    return (
        <Outer key={movie.index}>
        <Card interactive={true} elevation={Elevation.FOUR}>
          <MovieContainer backdrop={'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path}>
            {/* <MoviePoster>
              <img src={movie.smallPosterLink} alt={movie.title} />
            </MoviePoster> */}
            {/* <MovieInfo> */}
              <h2 style={{color: 'white'}}>{"#" + (parseInt(movie.index) + 1) + ": " + movie.title}</h2>
              {/* <p>{movie.overview}</p> */}
              <Buttons>
                <Button
                  intent="danger"
                  disabled={movie.ytLink === "NA"}
                  icon="video"
                >
                  <ButtonLink href={movie.ytLink}>Trailer</ButtonLink>
                </Button>
                <Button intent="warning" icon="film">
                  <ButtonLink href={movie.imdbLink}> IMDB</ButtonLink>
                </Button>
                <Button
                  intent="success"
                  icon="tick-circle"
                  onClick={() => seen(movie)}
                >
                  Seen</Button>
              </Buttons>
            {/* </MovieInfo> */}
          </MovieContainer>
        </Card>
      </Outer>
    )
}

const Outer = styled.div`

`


const MovieContainer = styled.div.attrs(props => ({
    style: {
        backgroundSize: 'cover',
        backgroundImage: `url(${props.backdrop})`,
    },
}))`
  display: flex;
  flex-direction: column ;
  width: 300px;
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

export default MovieCard
