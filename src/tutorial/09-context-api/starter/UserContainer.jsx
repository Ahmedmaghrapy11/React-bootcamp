import React from 'react';

const UserContainer = ({user, logout}) => {
  return (
    <div className='user-container'>
        {user ? <>
            <p>Welcome {user?.name?.toUpperCase()}</p>
        <button className='btn' onClick={logout}>Log out</button></>: <p>Please Log In...</p>}
    </div>
  );
};

export default UserContainer;