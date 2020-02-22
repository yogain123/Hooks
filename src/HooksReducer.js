import React, { useReducer, useContext } from "react";
import { DemoContext } from "./App";

// overriding initial state
const init = () => {
  return 25;
};

const reducer = (state, action) => {
  switch (action) {
    case "decrement":
      return state - 1;
    case "increment":
      return state + 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

let initialState = 0;

function HooksReducer() {
  const [counter, dispatch] = useReducer(reducer, initialState, init);
  const demoContextValue = useContext(DemoContext);
  return (
    <div>
      Demo Context Value: {demoContextValue}
      <br />
      <br />
      {counter}
      <br />
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default HooksReducer;
