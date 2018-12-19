import React, { Component } from 'react';
import '../stylesheets/App.css';
// import API_KEY from "./API_KEY";
// import { createClient } from "@google/maps";

class User extends Component {

  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:5000/api/users')
      .then(response => {
        return response.json();
      }).then(data => {
        let users = data.map((user) => {
          console.log(user)
          return (
            <div key={user._id}>
              <p>UserName: {user.userName}</p>
              <p>Email: {user.email}</p>
              <p>Location: {user.location.address}</p>
              <hr />
            </div>
          )
        })
        this.setState({ users: users })
      })
  }

  render() {
    return (
      <div className="App">
        <p>All Users:</p>
        <hr />
        {this.state.users}
      </div>
    );
  }
}

export default User;
