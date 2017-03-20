import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img alt="myAvatar" src={props.imgURL} />
    </div>
  );
};

export default Profile;