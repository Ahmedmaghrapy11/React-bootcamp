import React from "react";
import { people } from "../../../data";
import Person from "./Person";

const List = () => {
  return (
    <div>
      <h2>People Data</h2>
        {people.map((person) => (
          <Person key={person.id} {...person}/>
          ))}
    </div>
  );
};

export default List;
