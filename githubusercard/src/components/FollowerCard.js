import React from 'react';

import { FollowerDiv, FollowerDetail, FollowerGraphContain, Graph, FollowerPicContain, ProfilePic } from './ComponentStyles';

const FollowerCard = (props) => {
  console.log(props.follower)
  return(
    <FollowerDiv>
      {props.follower.map(follower => (
        <FollowerDetail key={follower.id}>
          <FollowerPicContain>
            <ProfilePic src={follower.avatar_url} alt={follower.name} />
          </FollowerPicContain>
          <h3>Login: {follower.login}</h3>
          <a href={follower.html_url} target='_blank' rel="noopener noreferrer">Github</a>
          <FollowerGraphContain>
            <Graph src={`http://ghchart.rshah.org/${follower.login}`} alt={`${follower.login}'s github contribution chart`} />
          </FollowerGraphContain>
        </FollowerDetail>
      ))};
    </FollowerDiv>
  )
}

export default FollowerCard;
