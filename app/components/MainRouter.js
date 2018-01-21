import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from "./Main/Main";

export default class MainRouter extends Component {
  render() {
    return (
      <Router>
      	<Route exact path="/" component={Main} />
      </Router>
    );
  }
}