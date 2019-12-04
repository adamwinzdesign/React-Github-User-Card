import React from 'react';
import './App.css';

import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      follower: []
    }
    console.log('Constructor is up!');
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/adamwinzdesign')
      .then(res => {
        console.log(res);
        this.setState({
          user: res.data
        })
      })
      .catch(error => console.log(error.response));

    axios
      .get('https://api.github.com/users/adamwinzdesign/followers')
      .then(res => {
        console.log(res);
        this.setState({
          follower: res.data
        })
      })
      .catch(error => console.log(error.response));
  }

  render() {
    return(
      <div>
        <UserCard user={this.state.user} />
        <FollowerCard follower={this.state.follower} />
      </div>
    )
  }
}

export default App;
