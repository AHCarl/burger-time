import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../stylesheets/App.css';
import UserLocation from './UserLocation'
import User from './User'
import Signup from './Signup'
import Signin from './Signin'

const usersApiUrl = "http://localhost:5000/api/users";
const userApiUrl = "http://localhost:5000/api/user"

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
      body: JSON.stringify(newAddress)
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
              {/* <p>Location: {user.location.address}</p> */}
              <hr />
            </div>
          )
        })
        this.setState({ user: users[0] })
      })
  }

  registerUser = (userData) => {
    fetch(`${userApiUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
  }

  signinUser = (userData) => {
    fetch(`${userApiUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(resp => resp.json())
    .then(resp => {
      localStorage.setItem('token', resp.token)
    })
  }

  componentDidMount = () => {
    this.getUsers()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/signup' render={routerProps => <Signup {...routerProps} handleSubmit={this.registerUser} />} />
          <Route exact path='/signin' render={routerProps => <Signin {...routerProps} handleSubmit={this.signinUser} />} />
          <Route exact path='/' render={routerProps => {
            return (
              <div>
                <User {...routerProps} user={this.state.user} />
                <UserLocation {...routerProps} handleSubmit={this.patchAddress} />
              </div>
            )
          } } />
        </div>
      </Router>
    );
  }
}

export default App;