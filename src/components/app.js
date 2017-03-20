import React, { Component } from 'react';
import Profile from './profile';
import Hobbies from './hobbies';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Val Alexeev',
      imgURL: 'https://avatars1.githubusercontent.com/u/11727720?v=3&u=c1848fc12146ead05efd92b86b193de929f2cc81&s=400',
      hobbyList: ['First Hobby', 'Second Hobby', 'Third Hobby']
    };
  }

  render() {
    return (
    <div>
      <Profile
          name={this.state.name}
          imgURL={this.state.imgURL} />
      <Hobbies
          hobbyList={this.state.hobbyList} />
    </div>
    );
  }
};

export default App;
