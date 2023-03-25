import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    //code
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default FocusInput;
