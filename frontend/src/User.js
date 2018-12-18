import React, { Component } from 'react';
import './App.css';
import API_KEY from "./API_KEY";

// PROBABLY DELETE THIS LATER
import { createClient } from '@google/maps'

class User extends Component {

  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  // PROBABLY DELETE THIS LATER
  apiCall = () => {
    const googleMapsClient = createClient({
      key: API_KEY
    })
    console.log(googleMapsClient)
  }

  componentDidMount = () => {
    // DON"T FORGET TO DELETE THIS.APICALL()
    this.apiCall();
    fetch('http://localhost:5000/api/users')
      .then(response => {
        return response.json();
      }).then(data => {
        let users = data.map((user) => {
          return (
            <div key={user._id}>
              <p>First Name: {user.firstName}</p>
              <p>Last Name: {user.lastName}</p>
              <p>Email: {user.email}</p>
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
