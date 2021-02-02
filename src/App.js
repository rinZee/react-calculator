import React from "react";
import "./App.css";
import {useState} from 'react';


const App = () => {
    
  const [screen, setScreen] = useState('0')
  
  const onClick = (e) => {
   
     if(e.target.id === "equals") {
const result = eval(screen).toString()

setScreen(result)
     }

     else if(e.target.id === "clear") {
      setScreen('0')
    }
   
   

else {   
  if(screen === "0") {
  setScreen(e.target.value)
  } else {
    setScreen(screen+e.target.value)
  }
}
  }

  return (
    <div id="calculator" className="calculator" onClick={onClick}>
                
    <div id="display" className="display">{screen}</div>
    <div className="nums-container">
    <button id="clear" className="light-grey big-w">AC</button>

    <button id="zero" className='dark-grey' value='0'>0</button>
    <button id="one" className='dark-grey' value='1'>1</button>
    <button id="two" className='dark-grey' value='2'>2</button>
    <button id="three" className='dark-grey' value='3'>3</button>
    <button id="four" className='dark-grey' value='4'>4</button>
    <button id="five" className='dark-grey' value='5'>5</button>
    <button id="six" className='dark-grey' value='6'>6</button>
    <button id="seven" className='dark-grey' value='7'>7</button>
    <button id="eight" className='dark-grey' value='8'>8</button>
    <button id="nine" className='dark-grey' value='9'>9</button>
    <button id="decimal" className='dark-grey' value='.'>.</button>

    </div>
    <div className="ops-container">
    <button id="add" value='+'>+</button>
    <button id="subtract" value='-'>-</button>
    <button id="multiply" value='*'>*</button>
    <button id="divide" value='/'>/</button>
    <button id="equals">=</button>
    </div>
  </div>  
  )
}

export default App;
