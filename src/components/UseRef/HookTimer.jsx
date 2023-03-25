import React, { useState, useEffect, useRef } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const counterRef = useRef();

  useEffect(() => {
    counterRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(counterRef.current);
  }, []);

  return (
    <div>
      The Clock is ticking : {timer} <br />
      <br />
      <button onClick={() => clearInterval(counterRef.current)}>
        Stop Timer
      </button>
    </div>
  );
};

export default HookTimer;
