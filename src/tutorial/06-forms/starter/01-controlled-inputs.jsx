import { useState } from "react";

const ControlledInputs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
  };
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">Name</label>
        <input onChange={(e) => setName(e.target.value )} value={name} type="text" id="name" name="name" className="form-input"/>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" name="email" className="form-input"/>
      </div>
      <button type="submit" className="btn btn-block">Submit</button>
    </form>
  );
};
export default ControlledInputs;
