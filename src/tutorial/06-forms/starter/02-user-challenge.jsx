import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    const newUser = {id: Date.now(), name};
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setName('');
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' onChange={handleChange} value={name}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <ul className="users">
        {users.map(user => {
          return <li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} key={user.id}>
            <h4>{user.name}</h4>
            <button style={{marginLeft: 'auto'}} className="btn" onClick={() => removeUser(user.id)}>Remove</button>
          </li>
        })}
      </ul>
    </div>
  );
};
export default UserChallenge;
