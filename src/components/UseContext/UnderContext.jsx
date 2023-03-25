import React from "react";
import { UserContext, ProgrammerName } from "./MainUseContext";

//this components explain how Context Works in a Old Way

const UnderContext = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(language) => {
          return (
            <ProgrammerName.Consumer>
              {(name) => {
                return (
                  <div>
                    Language Used Is {language} - and the Programmer Is {name}
                  </div>
                );
              }}
            </ProgrammerName.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default UnderContext;
