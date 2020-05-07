import React, {useState} from 'react'
import styled from "styled-components";

import { Button, ButtonGroup, Card, Elevation, Overlay, Classes, Dialog } from "@blueprintjs/core";


function MovieCard(props) {

  const [open, setOpen] = useState(false);


    const movie = props.movie
    const seen = props.seen

    return (
        <Outer key={movie.index}>
        <Card style={{padding: 0}} interactive={true} elevation={Elevation.FOUR} onClick={() => setOpen(!open)}>
          <MovieContainer backdrop={'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path}>
            
              <h2 style={{color: 'white'}}>{"#" + (parseInt(movie.index) + 1) + ": " + movie.title}</h2>
              <ButtonGroup fill>
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
              </ButtonGroup>
          </MovieContainer>
        </Card>
        <Dialog isOpen={open}  onClose={() => setOpen(!open)} icon="film" title={movie.title}>
              <InfoPane className={Classes.DIALOG_BODY}>
              <MoviePoster>
                <br />
                  <img width='100px' src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} alt={movie.title}/>
              </MoviePoster>
              <MovieInfo>
                  <h1 >{movie.title}</h1>
                  <p >{movie.overview}</p>
              </MovieInfo>
              </InfoPane>
            </Dialog>
      </Outer>
    )
}

const Outer = styled.div`
margin: 20px;
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
  width: 400px; 
  height: 150px;
`;

const InfoPane = styled.div`
  display: flex;
  flex-direction: row ;

`;

const MoviePoster = styled.div`
  flex-basis: 20%;
  padding: 5px;
`;

const MovieInfo = styled.div`
  flex-basis: 80%;
`;


const ButtonLink = styled.a`
  text-decoration: none;
`;

export default MovieCard
