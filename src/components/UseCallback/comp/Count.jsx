import React from "react";

const Count = ({ text, count }) => {
  console.log(`Rendering ${text}`);
  return (
    <div>
      <p>
        Your {text} is {count}
      </p>
    </div>
  );
};

export default React.memo(Count);
