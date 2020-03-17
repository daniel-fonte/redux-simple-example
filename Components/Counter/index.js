import React from 'react';
import { connect } from 'react-redux';

import Counter from './CounterContainer';
import * as CounterActions from '../../Actions/CounterAction';

function mapStateToProps(state) {
  return {
    count: state
  }
}

function mapDispatchToProps(dispatch) {
  return{
    onIncrement: () => dispatch({type: "Increment"}),
    onDecrement: () => dispatch({type: "Decrement"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);