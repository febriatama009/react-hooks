import { React, useState } from "react";

const UseStateWithFunctionalPrevState = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementByFive = () => {
    for (let index = 0; index < 5; index++) {
      setCount((prevCount) => prevCount + 1); //prevCount remember numbers after loop
    }
  };
  return (
    <div>
      Count : {count} <br /> <br />
      <span>
        <button onClick={() => setCount(initialCount)}>Reset To Zero</button>{" "}
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment By 1
        </button>{" "}
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Decrement By 1
        </button>{" "}
        <button onClick={incrementByFive}>Increment By 5</button>
      </span>
    </div>
  );
};

export default UseStateWithFunctionalPrevState;
