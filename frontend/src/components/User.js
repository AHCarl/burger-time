import React, { Component } from 'react';
import '../stylesheets/App.css';

class User extends Component {

  render() {
    return (
      <div className="App">
        <p>Hello, {this.props.user.userName}!</p>
        <p>Address: {this.props.user.location.address}</p>
      </div>
    );
  }
}

export default User;
