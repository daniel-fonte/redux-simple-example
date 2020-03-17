export default (state = 0, action) => {
  switch(action.type) {
    case "Increment": 
      return state + 1;
    case "Decrement":
      return state - 1;
    case "HighIncrement":
      return state + action.incrementValue;
    case "HighDecrement":
      return state - action.decrementValue;
    default:
      return state;
  }
}