import React from "react";
import { useState } from "react";

const Practice = () => {
  const [input, setInput] = useState();
  const [items, setItems] = useState();
  const events = (e) => {
    setInput(e.target.value);
  };
  const submit = (event) => {
    setItems((olditems) => {
      return [...olditems, input];
    });
    console.log(input);
  };

  return (
    <div>
      <input type="text" onChange={events} />
      <input type="button" value="Click" onClick={submit} />
      <h5>{items}</h5>
    </div>
  );
};

export default Practice;
