import React, { useState, useEffect } from "react";

const RunEffectOnlyOnce = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const printMouseCoordinate = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", printMouseCoordinate);

    return () => {
      console.log("Component Released");
      window.removeEventListener("mousemove", printMouseCoordinate);
    };
  }, []);

  return (
    <div>
      X coordinate : {x}, Y coordinate : {y}
    </div>
  );
};

export default RunEffectOnlyOnce;
