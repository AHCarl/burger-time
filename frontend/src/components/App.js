import React, { Component } from 'react';
import '../stylesheets/App.css';
import UserLocation from './UserLocation'
import User from './User'

const usersApiUrl = "http://localhost:5000/api/users";

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  changeAddress = (newAddress) => {
    fetch(usersApiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newAddress: newAddress })
    })
  }

  componentDidMount = () => {
    fetch(usersApiUrl)
      .then(response => {
        return response.json();
      }).then(data => {
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
        this.setState({ users: users })
      })
  }

  render() {
    return (
      <div className="App">
        <User user={this.state.users[0]} />
        <UserLocation handleSubmit={this.changeAddress} />
      </div>
    );
  }
}

export default App;
