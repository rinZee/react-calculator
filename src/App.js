import React from "react";
import "./App.css";
import {useState} from 'react';


const App = () => {
    
  const [input, setInput] = useState('0')
  const [prevNumber, setPrevNumber] = useState('')
  const [currentNumber, setCurrentNumber] = useState('')
  const [operator, setOperator] = useState('')

  const pressNum = (e) => {
    if(input === '0') {
      setInput(e.target.value)
    } else {
   setInput(input + e.target.value)
    }
  }

  const pressZero = (e) => {
    if(input !== '0') {
      setInput(input + e.target.value)
    }
  }
  
  const pressDecimal = (e) => {
if(input.indexOf('.') === -1) {
  setInput(input + e.target.value)
}
  }

const clearInput = () => {
  setInput('0')
}

const add = (e) => {

}

  return (
    <div id="calculator" className="calculator">
                
    <div id="display" className="display">{input}</div>
    <div className="nums-container">
    <button id="clear" className="light-grey big-w" onClick={clearInput}>AC</button>

    <button id="zero" className='dark-grey' value='0' onClick={pressZero}>0</button>
    <button id="one" className='dark-grey' value='1' onClick={pressNum}>1</button>
    <button id="two" className='dark-grey' value='2' onClick={pressNum}>2</button>
    <button id="three" className='dark-grey' value='3' onClick={pressNum}>3</button>
    <button id="four" className='dark-grey' value='4' onClick={pressNum}>4</button>
    <button id="five" className='dark-grey' value='5' onClick={pressNum}>5</button>
    <button id="six" className='dark-grey' value='6' onClick={pressNum}>6</button>
    <button id="seven" className='dark-grey' value='7' onClick={pressNum}>7</button>
    <button id="eight" className='dark-grey' value='8' onClick={pressNum}>8</button>
    <button id="nine" className='dark-grey' value='9' onClick={pressNum}>9</button>
    <button id="decimal" className='dark-grey' value='.' onClick={pressDecimal}>.</button>

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
