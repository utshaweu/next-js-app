import React, { useState } from "react";

const State = () => {
  const [value, setValue] = useState(0);
  const add = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <p>Value is added: {value}</p>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default State;
