import React from "react";
import { useState, useMemo } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={incrementOne}>Increment One : {counterOne}</button>{" "}
      <span>{isEven ? "oddNums" : "evenNums"}</span>
      <br />
      <br />
      <button onClick={incrementTwo}>Increment Two : {counterTwo}</button>
      <br />
      <br />
    </div>
  );
};

export default Counter;
