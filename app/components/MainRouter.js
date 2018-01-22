import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from "./Main/Main";
import Nav from "./children/Nav/Nav";
import Example from "./Example/Example";

const MainRouter = () =>
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Main} />
      <Route exact path="/example" component={Example} />
    </div>
  </Router>;

export default MainRouter;