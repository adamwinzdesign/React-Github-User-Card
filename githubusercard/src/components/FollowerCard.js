import React from 'react';

import { FollowerDiv, GraphContain, Graph } from './ComponentStyles';

const FollowerCard = (props) => {
  console.log(props.follower)
  return(
    <FollowerDiv>
      {props.follower.map(follower => (
        <div key={follower.id}>
          <img src={follower.avatar_url} alt={follower.name} />
          <h3>Login: {follower.login}</h3>
          <a href={follower.html_url} target='_blank' rel="noopener noreferrer">Github</a>
          <GraphContain>
            <Graph src={`http://ghchart.rshah.org/${follower.login}`} alt={`${follower.login}'s github contribution chart`} />
          </GraphContain>
        </div>
      ))};
    </FollowerDiv>
  )
}

export default FollowerCard;
