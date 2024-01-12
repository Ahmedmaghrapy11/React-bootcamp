import { useState } from "react";

const UserChallenge = () => {

  const [user, setUser] = useState(null);

  const login = () => {
    setUser({name: "ahmad"});
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <h2>user challenge</h2>
      { user ? 
        <div>
          <h3>Hello {user.name}, welcome to our app.</h3>
          <button type="button" className="btn" onClick={logout}>Log out</button>
        </div> : 
        <div>
          <h3>Please log in to our app to continue.</h3>
          <button type="button" className="btn" onClick={login}>Log In</button>
        </div> 
      }
    </div>
  );
};

export default UserChallenge;
