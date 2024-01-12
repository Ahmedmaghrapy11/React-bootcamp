import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
  <div className="container">
    <h2>{count}</h2>
    <button type="button" className="btn" onClick={incrementCount}>Increment</button>
    <button type="button" className="btn" onClick={decrementCount}>Decrement</button>
  </div>
  );
};

export default UseStateBasics;
