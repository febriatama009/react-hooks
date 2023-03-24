import { React, useState } from "react";
import RunEffectOnlyOnce from "./RunEffectOnlyOnce";

const UseEffectCleanUp = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <RunEffectOnlyOnce />}
    </div>
  );
};

export default UseEffectCleanUp;
