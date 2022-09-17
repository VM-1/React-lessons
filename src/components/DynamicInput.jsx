import React, { useState } from "react";

const DynamicInput = () => {
  const [inputValue, setInputValue] = useState("213");

  return (
    <div>
      <h1>{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        style={{ display: "flex" }}
      ></input>
    </div>
  );
};

export default DynamicInput;
