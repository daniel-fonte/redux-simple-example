import React from 'react';
import { connect } from 'react-redux';

import Counter from './CounterContainer';
import { highIncrementCount, highDecrementCount } from '../../Actions/CounterAction';

function mapStateToProps(state) {
  return {
    count: state
  }
}

function mapDispatchToProps(dispatch) {
  return{
    onIncrement: () => dispatch({type: "Increment"}),
    onDecrement: () => dispatch({type: "Decrement"}),
    onHighIncrement: (value) => dispatch(highIncrementCount(value)),
    onHighDecrement: (value) => dispatch(highDecrementCount(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);