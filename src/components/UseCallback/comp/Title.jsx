import React from "react";

const Title = () => {
  console.log("Rendering Title");
  return <h2>This Is Title</h2>;
};

export default React.memo(Title);
