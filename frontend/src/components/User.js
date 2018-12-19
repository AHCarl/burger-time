import React, { Component } from 'react';
import '../stylesheets/App.css';
// import API_KEY from "./API_KEY";
// import { createClient } from "@google/maps";

class User extends Component {

  render() {
    return (
      <div className="App">
        <p>All Users:</p>
        <hr />
        {this.props.user}
      </div>
    );
  }
}

export default User;
