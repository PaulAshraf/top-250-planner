import React, {useState} from 'react'
import styled, {keyframes} from "styled-components";
import { Button, Slider, ButtonGroup, ProgressBar } from "@blueprintjs/core";


function Welcome(props) {

    const months = props.months
    const changeMonths = props.changeMonths
    const handleClick = props.handleClick
    const selectList = props.selectList

    const bar = props.bar
    const prog = props.prog
    const handleBar = props.handleBar

    const [curr, setCurr] = useState(250)

    function changeList(list){
        handleBar(true)
        selectList(list)
        setCurr(parseInt(list))
    }
   

    function labelRenderer(value){
        if(value === 1) return `${value} month` 
        return `${value} months`
    }

    return (
        <FloatingPosters0><FloatingPosters1><FloatingPosters2><FloatingPosters3><FloatingPosters4><FloatingPosters5>
         <FloatingPosters6><FloatingPosters7><FloatingPosters8><FloatingPosters9><FloatingPosters10>
        <Container>
            {console.log(bar)}
            <BarContainer>{bar?<ProgressBar intent='success' value={prog} />:<></>}</BarContainer>
            <br />
            <ButtonGroup>

                <Button active={curr===250} large icon="glass" onClick={() => changeList('250')}><strong>Top 250</strong></Button>
                <Button active={curr===100}large icon="timeline-line-chart" onClick={() => changeList('100')}><strong>Hottest 100</strong></Button>
                <Button active={curr!==250&&curr!==100} large icon="edit" onClick={() => changeList('0')}><strong>Your Own List</strong></Button>
            </ButtonGroup>
            <h1> {months === 1? `Finish IMDb's ${curr===250?'Top':'Hottest'} ${curr} in ${months} month.` : `Finish IMDB's ${curr===250?'Top':'Hottest'} ${curr} in ${months} months.` } </h1>
                <SliderContainer>
                    <Slider 
                        min={1}
                        max={12}
                        stepSize={1}
                        labelStepSize={3}
                        showTrackFill={true}
                        value={months}
                        onChange={changeMonths}
                        labelRenderer={labelRenderer}
                    />
                </SliderContainer>
                <br />
            <Button large onClick={() => handleClick()}><strong>GO!</strong></Button>
        </Container>
        </FloatingPosters10></FloatingPosters9></FloatingPosters8></FloatingPosters7></FloatingPosters6>
        </FloatingPosters5></FloatingPosters4></FloatingPosters3></FloatingPosters2></FloatingPosters1></FloatingPosters0>
        
    )
}

const BarContainer = styled.div`
width: 25%;
`

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
backdrop-filter: blur(4px);
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
background-size: 22%;
animation: ${moveIt1} 18s linear infinite;

`

const moveIt2 = keyframes`
from {background-position: 40% bottom;}
to {background-position: left 40% top -300px;}
`

const FloatingPosters2 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/amvmeQWheahG3StKwIE1f7jRnkZ.jpg);
background-repeat: no-repeat;
background-size: 21%;
animation: ${moveIt2} 15s linear infinite;

`

const moveIt3 = keyframes`
from {background-position: 60% bottom;}
to {background-position: left 60% top -300px;}
`

const FloatingPosters3 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg);
background-repeat: no-repeat;
background-size: 18%;
animation: ${moveIt3} 22s linear infinite;

`

const moveIt4 = keyframes`
from {background-position: 80% bottom;}
to {background-position:  left 80% top -300px;}
`

const FloatingPosters4 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/c8Ass7acuOe4za6DhSattE359gr.jpg);
background-repeat: no-repeat;
background-size: 20%;
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
from {background-position: left 10% bottom -300px;}
to {background-position:  left 10% top -300px;}
`

const FloatingPosters6 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg);
background-repeat: no-repeat;
background-size: 19%;
animation: ${moveIt6} 20s linear infinite;
`

const moveIt7 = keyframes`
from {background-position: left 30% bottom -400px;}
to {background-position:  left 30% top -400px;}
`

const FloatingPosters7 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/sN4h2uODctPePR8ot611XK3fdbs.jpg);
background-repeat: no-repeat;
background-size: 18%;
animation: ${moveIt7} 13s linear infinite;
`

const moveIt8 = keyframes`
from {background-position: left 50% bottom -350px;}
to {background-position:  left 50% top -3500px;}
`

const FloatingPosters8 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg);
background-repeat: no-repeat;
background-size: 21%;
animation: ${moveIt8} 17s linear infinite;
`


const moveIt9 = keyframes`
from {background-position: left 70% bottom -600px;}
to {background-position:  left 70% top -600px;}
`

const FloatingPosters9 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg);
background-repeat: no-repeat;
background-size: 19%;
animation: ${moveIt9} 25s linear infinite;
`
const moveIt10 = keyframes`
from {background-position: left 90% bottom -400px;}
to {background-position:  left 90% top -400px;}
`

const FloatingPosters10 = styled.div`
background-image: url(https://image.tmdb.org/t/p/w300/saHP97rTPS5eLmrLQEcANmKrsFl.jpg);
background-repeat: no-repeat;
background-size: 17%;
animation: ${moveIt10} 20s linear infinite;
`








export default Welcome
