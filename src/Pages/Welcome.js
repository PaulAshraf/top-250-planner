import React,{ useState} from 'react'
import styled, {keyframes} from "styled-components";
import { Button, Slider } from "@blueprintjs/core";


function Welcome() {

    const [months, setMonths] = useState(1);

    function changeMonths(value) {
        setMonths(value)
    }

    function labelRenderer(value){
        if(value === 1) return `${value} month` 
        return `${value} months`
    }

    return (
        <FloatingPosters0><FloatingPosters1><FloatingPosters2>
         <FloatingPosters3><FloatingPosters4><FloatingPosters5>
         {/* <FloatingPosters6> */}
        <Container>
            <h1> {months === 1? `Finish IMDb's Top 250 in ${months} month.` : `Finish IMDb's Top 250 in ${months} months.` } </h1>
                <SliderContainer>
                    <Slider 
                        min={1}
                        max={12}
                        stepSize={1}
                        labelStepSize={11}
                        showTrackFill={true}
                        value={months}
                        onChange={changeMonths}
                        labelRenderer={labelRenderer}
                    />
                </SliderContainer>
                <br />
            <Button large>GO!</Button>
        </Container>
        {/* </FloatingPosters6> */}
        </FloatingPosters5></FloatingPosters4></FloatingPosters3>
        </FloatingPosters2></FloatingPosters1></FloatingPosters0>
    )
}

const SliderContainer = styled.div`
width: 70%
`

const Container = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin); 
color: white;
`
const moveIt0 = keyframes`
from {background-position: 0 bottom;}
to {background-position: left 0 top -300px;}
`

const FloatingPosters0 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg);
background-repeat: no-repeat;
background-size: 20%;
animation: ${moveIt0} 20s linear infinite;


`

const moveIt1 = keyframes`
from {background-position: 20% bottom;}
to {background-position: left 20% top -300px;}
`

const FloatingPosters1 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/iVZ3JAcAjmguGPnRNfWFOtLHOuY.jpg);
background-repeat: no-repeat;
background-size: 30%;
animation: ${moveIt1} 18s linear infinite;

`

const moveIt2 = keyframes`
from {background-position: 40% bottom;}
to {background-position: left 40% top -300px;}
`

const FloatingPosters2 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/amvmeQWheahG3StKwIE1f7jRnkZ.jpg);
background-repeat: no-repeat;
background-size: 28%;
animation: ${moveIt2} 15s linear infinite;

`

const moveIt3 = keyframes`
from {background-position: 60% bottom;}
to {background-position: left 60% top -300px;}
`

const FloatingPosters3 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg);
background-repeat: no-repeat;
background-size: 20%;
animation: ${moveIt3} 22s linear infinite;

`

const moveIt4 = keyframes`
from {background-position: 80% bottom;}
to {background-position:  left 80% top -300px;}
`

const FloatingPosters4 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/c8Ass7acuOe4za6DhSattE359gr.jpg);
background-repeat: no-repeat;
background-size: 26%;
animation: ${moveIt4} 18s linear infinite;

`

const moveIt5 = keyframes`
from {background-position: 100% bottom;}
to {background-position:  left 100% top -300px;}
`

const FloatingPosters5 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg);
background-repeat: no-repeat;
background-size: 21%;
animation: ${moveIt5} 20s linear infinite;

`

const moveIt6 = keyframes`
from {background-position: 10% bottom;}
to {background-position:  left 10% top -300px;}
`

const FloatingPosters6 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg);
background-repeat: no-repeat;
background-size: 230px;
animation: ${moveIt6} 17s linear infinite;
animation-delay: 5s;

`

// const moveIt7 = keyframes`
// from {background-position: bottom left;}
// to {background-position: top right;}
// `

// const FloatingPosters7 = styled.div`
// background-image: url(https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg);
// background-repeat: no-repeat;
// background-size: 261px;
// animation: ${moveIt7} 10s linear infinite;
// `







export default Welcome
