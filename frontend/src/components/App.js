import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import '../stylesheets/App.css';
import LocationForm from './LocationForm'
import User from './User'
import Signup from './Signup'
import Signin from './Signin'
import BurgersContainer from '../containers/BurgersContainer'

const usersApiUrl = "http://localhost:5000/api/users";
const userApiUrl = "http://localhost:5000/api/user"

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: {
        email: "",
        password: "",
        userName: "",
        preferences: {
          time: 0,
          price: 0
        },
        location: {
          address: "",
          coords: {
            lat: 0,
            long: 0
          }
        },
        burgers: []
      },
      error: null
    };
  }

  patchAddress = (newAddress) => {
    fetch(usersApiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state.user,
        address: newAddress
      })
    })
    .then(resp => resp.json())
    .then(user => {
      this.setState({ user })
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
    .then(resp => {
      return resp.ok ? resp.json() : resp.statusText
    })
    .then(resp => {
      if (resp === "Unauthorized") {
        this.setState({ error: "Incorrect Login Info"})
      } else {
        this.setCurrentUser(resp)
      }
    })
  }

  signoutUser = () => {
    localStorage.removeItem('token')
    this.setState({user: null})
  }

  // TODO: abstract redirection
  // redirectTo = (routerProps, route) => {
  //  if (localStorage.token) return <Redirect {...routerProps} to={route}/>
  // }

  setCurrentUser = (data) => {
    localStorage.setItem('token', data.token)
    this.setState({
      user: data.user,
      error: null
    })
  }

  getCurrentUser = () => {
    if (localStorage.token) {
      fetch("http://localhost:5000/api/auth", {
        headers: {
          'Authorization': localStorage.token
        }
      })
      .then(resp => resp.json())
      .then(resp => this.setState({user: resp.user}))
    }
  }

  getDirections = (restaurantName) => {
    // PUT DIRECTIONS API LOGIC HERE
    console.log(restaurantName)
  }

  toggleLocationForm = () => {

  }

  componentDidMount = () => {
    this.getCurrentUser()
  }

  render() {
    const signedIn = !!localStorage.token
    return (
      <Router>
        <div>
          <Route exact path='/signup' render={routerProps => <Signup {...routerProps} handleSubmit={this.registerUser} />} />
          <Route exact path='/signin' render={routerProps => signedIn ? <Redirect {...routerProps} to='/' /> : <Signin {...routerProps} error={this.state.error} handleSubmit={this.signinUser} />} />
          <Route exact path='/' render={routerProps => {
            if (!signedIn) {
              return <Redirect {...routerProps} to='/signin' />
            } else {
              return (
                <React.Fragment>
                  <User {...routerProps} user={this.state.user} />
                  <BurgersContainer {...routerProps} location={this.state.user.location} getDirections={this.getDirections} toggleAddressForm={this.toggleLocationForm} patchAddress={this.patchAddress} logout={this.signoutUser} />
                </React.Fragment>
              )
            }
          } } />
        </div>
      </Router>
    );
  }
}

export default App;
