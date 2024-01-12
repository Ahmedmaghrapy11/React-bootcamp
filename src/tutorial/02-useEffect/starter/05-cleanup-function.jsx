import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);
  const handleToggle = () => {
    setValue(!value);
  };
  return (
    <div>
      <h2>cleanup function</h2>
      <button className="btn" onClick={handleToggle}>Toggle</button>
      {value && <SomeComponent/>}
    </div>
  );
};

const SomeComponent = () => {

  useEffect(() => {
    function someFunc() {
      alert('from event listener');
    }
    window.addEventListener('scorll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);
  }, []);

  return (
    <div>
      <h3>You clicked the button...</h3>
    </div>
  );
}

export default CleanupFunction;
