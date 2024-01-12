import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        setUser(user);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <>
        <p className='loading'>Loading...</p>
      </>
    );
  }else if (error) {
    return (
      <>
        <p className='title'>Error while getting data...</p>
      </>
    );
  }
    const {login, avatar_url, bio, company, html_url} = user;
    return (
      <>
        <div>
          <img style={{width: '150px', borderRadius: '25px'}} src={avatar_url} alt={login} />
          <h2 className='title'>{login}</h2>
          <a className='btn' href={html_url}>Profile</a>
          <h4>Works {company}</h4>
          <p>{bio}</p>
        </div>
      </>
    );  
};
export default MultipleReturnsFetchData;
