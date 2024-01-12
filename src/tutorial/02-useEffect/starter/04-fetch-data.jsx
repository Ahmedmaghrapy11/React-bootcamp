import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {

  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const response = await fetch(url);
        const developers = await response.json();
        setDevelopers(developers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDevelopers();
  }, []);

  return (
    <section>
      <h3>GIThub Developers</h3>
      <ul className="users">
        {developers.map((developer) => {
          const {id, login, avatar_url, html_url} = developer;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login}/>
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
