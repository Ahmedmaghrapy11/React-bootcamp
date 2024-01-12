import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {

  const [people, setPeople] = React.useState(data);

  const handleDelete = (id) => {
    let newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
  };

  const handleClear = () => {
    setPeople([]);
  };

  return (
    <div className="container">
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button 
                onClick={() => handleDelete(id)} 
                type="button" 
                className="btn">Delete</button>
            </div>
          );
        })}
      <button 
        className="btn btn-block" 
        style={{ 'marginTop': '2rem' }} 
        onClick={handleClear}>Clear all</button>
    </div>
  );
};

export default UseStateArray;


