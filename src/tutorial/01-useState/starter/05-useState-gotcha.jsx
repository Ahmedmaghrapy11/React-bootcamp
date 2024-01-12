import { useState } from "react";

const UseStateGotcha = () => {

  const [value, setValue] = useState(0);

  const increaseValue = () => {
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
    // console.log('clicked');
  };

  return (
    <div className="container">
      <h1>{value}</h1>
      <button className="btn" onClick={increaseValue}>Increment</button>
    </div>
  );
};

export default UseStateGotcha;
