import { React, useState } from "react";

const UseStateWithFunctionalComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Count Is = {count} </button>
    </div>
  );
};

export default UseStateWithFunctionalComponent;
