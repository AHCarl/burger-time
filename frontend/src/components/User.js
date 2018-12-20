import React, { Component } from 'react';
import '../stylesheets/App.css';

class User extends Component {

  render() {
    return (
      <div className="App">
        <p>Hello, {this.props.user.userName}!</p>
      </div>
    );
  }
}

export default User;
