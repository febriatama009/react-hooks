import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const Parent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(15000000);

  const incrementAge = useCallback(() => {
    setAge((age) => age + 1);
  }, [setAge]);

  const incrementSalary = useCallback(() => {
    setSalary((salary) => salary + 1000000);
  }, [setSalary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default Parent;
