// Include React
import React, { Component } from 'react';
import Nav from '../children/Nav/Nav';
import './main.css';

// Here we include all of the sub-components
// var Form = require("./children/Form");

// // Helper for making AJAX requests to our API
// var helpers = require("./utils/helpers");

// Creating the Main component
export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid main-content">
          <h1>Oh haiiiii meow</h1>
        </div>
      </div>
    );
  }
}
