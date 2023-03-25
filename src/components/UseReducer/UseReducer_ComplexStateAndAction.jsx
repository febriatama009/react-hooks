import { React, useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "incrementTwo":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrementTwo":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducer_ComplexStateAndAction = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>FirstCount : ({count.firstCount})</h2>

      {/* for firstcount */}
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment By 1
        </button>
        {"   "}
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement By (-1)
        </button>
        {"   "}
        <button onClick={() => dispatch({ type: "increment", value: 2 })}>
          Increment By 2
        </button>
        {"   "}
        <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
          Decrement By (-2)
        </button>
        {"   "}
      </div>

      <br />
      <br />

      {/* For Second Count */}
      <h2>SecondCount : ({count.secondCount})</h2>
      <div>
        <button onClick={() => dispatch({ type: "incrementTwo", value: 10 })}>
          Increment By 10
        </button>
        {"   "}
        <button onClick={() => dispatch({ type: "decrementTwo", value: 10 })}>
          Decrement By (-10)
        </button>
      </div>

      <br />
      <br />

      <button onClick={() => dispatch({ type: "reset" })}>Reset All</button>
    </div>
  );
};

export default UseReducer_ComplexStateAndAction;
