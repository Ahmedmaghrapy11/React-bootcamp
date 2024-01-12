import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);

  const handleToggle = () => {
    setValue(!value);
  };

  return (
    <div>
      <h2>toggle challenge</h2>
      <h4>Click to toggle</h4>
      <button type="button" className="btn" onClick={handleToggle}>Toggle</button>
      {value && <ShowWhenTrue/>}
    </div>
  );
};

const ShowWhenTrue = () => {
  return (
    <div>
      <h2>Value is true so I appear...</h2>
    </div>
  );
};

export default ToggleChallenge;
