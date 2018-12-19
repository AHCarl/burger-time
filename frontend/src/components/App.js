import React, { Component } from 'react';
import '../stylesheets/App.css';
import UserLocation from './UserLocation'
import User from './User'

const usersApiUrl = "http://localhost:5000/api/users";

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  patchAddress = (newAddress) => {
    fetch(usersApiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newAddress: newAddress })
    })
    // figure out how to re-render
  }

  getUsers = () => {
    fetch(usersApiUrl)
      .then(resp => resp.json())
      .then(data => {
        let users = data.map((user) => {
          return (
            <div key={user._id}>
              <p>UserName: {user.userName}</p>
              <p>Email: {user.email}</p>
              <p>Location: {user.location.address}</p>
              <hr />
            </div>
          )
        })
        this.setState({ user: users[0] })
      })
  }

  componentDidMount = () => {
    this.getUsers()
  }

  render() {
    return (
      <div className="App">
        <User user={this.state.user} />
        <UserLocation handleSubmit={this.patchAddress} />
      </div>
    );
  }
}

export default App;
