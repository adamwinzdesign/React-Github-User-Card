import React from 'react';

const UserCard = (props) => {
  console.log(props)
  return(
    <div key={props.user.id}>
      <h1>User Name: {props.user.name}</h1>
      <h2>Location: {props.user.location}</h2>
      <h2>Number of public repos: {props.user.public_repos}</h2>
      <p>Number of Followers: {props.user.followers}</p>
      <p>Number of users {props.user.name} is following: {props.user.following}</p>
      <img src={props.user.avatar_url} alt='User'></img>
    </div>
  )
}

export default UserCard;
