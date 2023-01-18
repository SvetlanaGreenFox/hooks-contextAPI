import React from 'react';

export default function Item(props) {
  const { userData, onItemClick } = props;

  return (
    <li
      className="user-item"
      key={userData.id}
      onClick={onItemClick.bind(null, userData.id)}
    >
      <a href="#user">{userData.name}</a>
    </li>
  );
}
