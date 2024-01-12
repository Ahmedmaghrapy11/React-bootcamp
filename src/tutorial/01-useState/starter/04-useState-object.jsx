import { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'ahmad',
    age: 23,
    hobby: 'reading'
  });

  const changePerson = () => {
    setPerson({...person, name: 'hesham', job: 'software developer'})
  };

  let {name, age, hobby, job} = person;

  return (<div className='container'>
    <h1>Person data</h1>
    <h4>name: {name}</h4>
    <h4>age: {age}</h4>
    <h4>hobby: {hobby}</h4>
    {job && <h4>job: {job}</h4>}
    <button type="button" className='btn' onClick={changePerson}>Change Person</button>
  </div>
  );
};

export default UseStateObject;
