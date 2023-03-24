import React from "react";
import UseStateWithArray from "./UseStateWithArray";
import UseStateWithClass from "./UseStateWithClass";
import UseStateWithFunctionalComponent from "./UseStateWithFunctionalComponent";
import UseStateWithFunctionalPrevState from "./UseStateWithFunctionalPrevState";
import UseStateWithObject from "./UseStateWithObject";

const MainUseState = () => {
  return (
    <div>
      <div>
        This is From Class Component
        <UseStateWithClass />
      </div>
      <br />
      <br />
      <div>
        This One is Functional Component
        <UseStateWithFunctionalComponent />
      </div>
      <br />
      <br />
      <div>
        This One is UseState With prevState
        <br /> <br />
        <UseStateWithFunctionalPrevState />
      </div>
      <br />
      <br />
      <div>
        This One is UseState With Object <br />
        <UseStateWithObject />
      </div>
      <br />
      <br />
      <div>
        This One is UseState With Array <br /> <br />
        <UseStateWithArray />
      </div>
    </div>
  );
};

export default MainUseState;
