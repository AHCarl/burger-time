import React, { Component } from 'react';
import '../stylesheets/App.css';

class User extends Component {

  render() {
    return (
      <div className="App">
        <h3>Hello, {this.props.user.userName}!</h3>
        <h3>You are located at: {this.props.user.location.address}.</h3>
        <h3> Your Burger Time is: ____!</h3>
        <br/>
      </div>
    );
  }
}

export default User;
