import { React, useContext } from "react";
// import UnderContext from "./UnderContext";
import { UserContext, ProgrammerName } from "./MainUseContext";

//this explain simplicity of UseContext Hooks

const Context = () => {
  const lang = useContext(UserContext);
  const proName = useContext(ProgrammerName);

  return (
    <div>
      The language is {lang} - and its created {proName}
    </div>
  );
};

export default Context;
