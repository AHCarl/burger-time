import React, { Component } from 'react';
import '../stylesheets/App.css';

class User extends Component {

  getBurgerTime = () => {
    if (this.props.user.burgers[0]) {
      return this.props.user.burgers[0].time
    } else {
      return '?'
    }
  }

  render() {
    console.log(this.props.user.burgers[0])
    return (
      <div className="App">
        <h3>Hello, {this.props.user.userName}! Your Burger Time is: {this.getBurgerTime()}!</h3>
        <h3>You are located at: {this.props.user.location.address}.</h3>
        <br/>
      </div>
    );
  }
}

export default User;
