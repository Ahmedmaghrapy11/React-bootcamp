const ErrorExample = () => {
  let count = 0;

  const incrementCount = () => {
    count++;
    console.log(count);
  };
  return ( <div className="container">
    <h2>{count}</h2>
    <button onClick={incrementCount} className="btn">Increment</button>
  </div>);
};

export default ErrorExample;
