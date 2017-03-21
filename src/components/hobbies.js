import React from 'react';

const Hobbies = (props) => {
  const hobbies = props.hobbyList
    .map((hobby, index) => <li key={index}>{hobby}</li>);

  return(
    <div>
      <h3>My hobbies:</h3>
      <ul>
        {hobbies}
      </ul>
    </div>
  );
};

export default Hobbies;