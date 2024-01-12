import { useState } from 'react';

const ShortCircuitOverview = () => { 
  const [falsy, setFalsy] = useState("");
  const [truthy, setTruthy] = useState("Hey there !");
  return <h2>{ falsy || truthy }</h2>;
};
export default ShortCircuitOverview;
