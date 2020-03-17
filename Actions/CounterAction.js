export function incrementCount() {
  return {
    type: "Increment"
  }
}

export function decrementCount() {
  return {
    type: "Decrement"
  }
}

export function highIncrementCount(value) {
  return {
    type: "HighIncrement",
    incrementValue: value
  }
}

export function highDecrementCount(value) {
  return {
    type: "HighDecrement",
    decrementValue: value
  }
}