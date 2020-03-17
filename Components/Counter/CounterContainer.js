import React, { useState } from 'react';
import CounterStyles from './styles';

export default function Counter(props) {
  
  const [inputCount, setInputCount] = useState(0);
  const [radioInput, setRadioInput] = useState("");

  function submitCounter() {
    if(radioInput === "increment") {
      return props.onHighIncrement(parseInt(inputCount));
    } 
    if(radioInput === "decrement") {
      return props.onHighDecrement(parseInt(inputCount));
    }
  }

  return(
    <CounterStyles>
      <h1>Counter</h1>
      <h2>{props.count.Counter}</h2>
      <div className="incrementAndDecrement">
        <div className="simpleHandleCounter">
          <button type="button" onClick={props.onIncrement}>+</button>
          <button type="button" onClick={props.onDecrement}>-</button>
        </div>
        <div className="highHandleCounter">
          <div className="InputHandleCounter">
            <input type="text" value={inputCount} onChange={event => setInputCount(event.target.value)} />
            <button type="button" onClick={submitCounter}>Handle Counter</button>
          </div>
          <div className="InputOptionCounter">
            <label>INCREMENT</label>
            <input type="radio" name="counter" value="increment" onChange={event => setRadioInput(event.target.value)} />
            <label>DECREMENT</label>
            <input type="radio" name="counter" value="decrement" onChange={event => setRadioInput(event.target.value)} />
          </div>
        </div>
      </div>
    </CounterStyles>
  );
}