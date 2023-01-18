import React, { useEffect, useState } from 'react';
import Item from './Item.js';
import Details from './Details.js';

export default function List() {
  const [usersList, setUsersList] = useState({
    users: [],
  });

  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
    )
      .then((responce) => responce.json())
      .then((data) =>
        setUsersList((prevState) => ({ ...prevState, users: data }))
      );
  }, []);

  const onItemClick = (id) => {
    const targetUser = usersList.users.find((user) => user.id === id);

    setActiveUser((prevState) => targetUser);
  };

  return (
    <div className="list-wrapper">
      <ul className="users-list">
        {usersList.users.map((item) => (
          <Item userData={item} onItemClick={onItemClick} />
        ))}
      </ul>
      {activeUser && <Details userInfo={activeUser} />}
    </div>
  );
}
