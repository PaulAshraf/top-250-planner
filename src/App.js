import React, {useState} from 'react';
import './App.css';

import Main from './Pages/Main'
import Welcome from './Pages/Welcome'


function App() {

  const [months, setMonths] = useState(1);
  const [clicked, setClicked] = useState(false);

  function changeMonths(value) {
    setMonths(value)
}

function handleClick(){
  setClicked(true)
}


  return (
    <div className="App">
      {!clicked?
      <Welcome changeMonths={changeMonths} months={months} handleClick={handleClick} />
      :
      <Main months={months} />
      }
    </div>
  );
}



export default App;
