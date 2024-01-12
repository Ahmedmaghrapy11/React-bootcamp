import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "defualt value"}</h2>
      <h2>{text && (
        <div>
          <h2>Whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}</h2>
      {user && <SomeComponent  />}
    </div>
  );
};

const SomeComponent = ({name}) => {
  return (
    <div>
      <h2>Whatever return</h2>
      <h2>{name ? "Hello " + name : "Hello Anonymous"}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
