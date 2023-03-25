import React from "react";
import UseContextHooks from "./UseContextHooks";

export const UserContext = React.createContext();
export const ProgrammerName = React.createContext();

const MainUseContext = () => {
  return (
    <div>
      <UserContext.Provider value={"ReactJS"}>
        <ProgrammerName.Provider value={"By Meta Team"}>
          <UseContextHooks />
        </ProgrammerName.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default MainUseContext;
