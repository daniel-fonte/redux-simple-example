import React from 'react';
import CounterStyles from './styles';

export default function Counter(props) {
  return(
    <CounterStyles>
      <h1>Counter</h1>
      <h2>{props.count.Counter}</h2>
      <button type="button" onClick={props.onIncrement}>+</button>
      <button type="button" onClick={props.onDecrement}>-</button>
    </CounterStyles>
  );
}