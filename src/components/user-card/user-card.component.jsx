import React from 'react';

import './user-card.styles.css';

const UserCard = ({ user }) => {
  const { name, email, location, phone, picture } = user;

  return (
    <div className="UserCard">
      <img src={picture.large} alt="user" />
      <div className="divider" />
      <span className="property">
        <strong>Name:</strong> {name.first} {name.last}
      </span>
      <span className="property">
        <strong>Email:</strong> {email}
      </span>
      <span className="property">
        <strong>Address:</strong> {location.street.number}{' '}
        {location.street.name}, {location.city}
      </span>
      <span className="property">
        <strong>Phone Number:</strong> {phone}
      </span>
    </div>
  );
};

export default UserCard;
