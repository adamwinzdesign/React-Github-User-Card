import React from 'react';

const FollowerCard = (props) => {
  console.log(props)
  return(
    <div>
      {props.follower.map(follower => (
        <div key={follower.id}>
          <img src={follower.avatar_url} alt={follower.name} />
          <h3>Login: {follower.login}</h3>
          <a href={follower.html_url} target='_blank' rel="noopener noreferrer">Github</a>
        </div>
      ))};
    </div>
  )
}

export default FollowerCard;
