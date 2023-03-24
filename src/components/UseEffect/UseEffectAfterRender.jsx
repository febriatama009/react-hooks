import { React, useState, useEffect } from "react";

const UseEffectAfterRender = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`Title updated based on button clicked`);
    document.title = `You Clicked the Button ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <button onClick={() => setCount(count + 1)}>
        Button clicked {count} times
      </button>
    </div>
  );
};

export default UseEffectAfterRender;
