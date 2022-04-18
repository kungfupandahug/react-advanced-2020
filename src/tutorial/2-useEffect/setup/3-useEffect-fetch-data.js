import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  // useState preserves the value and triggers the re-render
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();

    setUsers(users);
    // this will trigger re-render while inside a re-render from
    // useEffect... re-render loop will occur :(
    // need to either add a dependency list to useEffect, and use
    // setUsers here, OR
  };

  useEffect(() => {
    getUsers();
  }, []);
  // useEffect cannot be async! it cannot return a promise!!
  // useEffect(async ()=>{...}); // big nono!!
  // can set up a sync await inside the function, or separat

  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>profile</a>
            </div>
          </li>
        })}
      </ul>
    </>
  )
};

export default UseEffectFetchData;
