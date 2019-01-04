import React, { Component } from 'react';
import '../stylesheets/App.css';

class User extends Component {

  render() {
    return (
      <div className="App">
        <p>Hello, {this.props.user.userName}! You are located at: {this.props.user.location.address}</p>
        <br/>
      </div>
    );
  }
}

export default User;
