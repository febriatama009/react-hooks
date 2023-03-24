import { React, useState } from "react";

const UseStateWithObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        //manual merge by using spread syntax ...name
      />{" "}
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />{" "}
      <br />
      <span>
        Your First Name is : {name.firstName} <br />
        Your Last Name is : {name.lastName}
      </span>
    </div>
  );
};

export default UseStateWithObject;
