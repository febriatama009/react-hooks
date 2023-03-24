import { React, useState, useEffect } from "react";

const UseEffectWithIncorrectDependecy = () => {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]); //array must be specify to let useEffect know where component that needs to changed

  return (
    <div>
      <h2>Clock is ticking</h2>
      {count}
    </div>
  );
};

export default UseEffectWithIncorrectDependecy;
