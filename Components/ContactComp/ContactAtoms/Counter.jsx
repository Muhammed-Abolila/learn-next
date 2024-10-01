"use client";
import { useState } from "react";
const Counter = () => {
  let [counter, setCounter] = useState(0);
  return (
    <>
      <h2>this counter should be in client component</h2>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </>
  );
};

export default Counter;
