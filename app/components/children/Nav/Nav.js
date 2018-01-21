import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default class Nav extends Component { 
  render() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container nav-container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                <i className="fa fa-bars"></i>
            </button>
            <button type="button" className="navbar-toggle navbar-toggle-right" data-toggle="collapse" data-target=".navbar-main-collapse1">
                <i className="glyphicon glyphicon-plus"></i>
            </button>
            <Link to={"/"} ><img className="icon-middle-nav-mobile" src={require("../../../img/shapes/shape.png")} /></Link>
          </div>

          <div className="collapse navbar-collapse navbar-left navbar-main-collapse">
              <ul className="nav navbar-nav">
                  <li className="hidden">
                      <a href="#page-top"></a>
                  </li>
                  <li>
                      <a className="page-scroll nav-left-text" data-toggle="modal" data-target="#login-modal"><p>REVIEWS</p></a>
                  </li>
              </ul>
          </div>
          <div className="collapse navbar-collapse navbar-right navbar-main-collapse1">
              <ul className="nav navbar-nav">
                  <li className="hidden">
                      <a href="#page-top"></a>
                  </li>
                  
                  <li>
                      <a className="page-scroll nav-right-text" href="/pricing/">
                        <img className="navigation-icons" src={require("../../../img/shapes/Profile.png")} />
                        <p>PROFILE</p>
                      </a>
                  </li>
                  <li>
                      <a className="page-scroll nav-right-text" href="/trips/">
                        <img className="navigation-icons" src={require("../../../img/shapes/offline.png")} />
                        <p>OFFLINE MODE</p>
                      </a>
                  </li>
              </ul>
          </div>
          <Link to={"/"} ><img className="icon-middle-nav-desktop" src={require("../../../img/shapes/shape.png")} /></Link>
        </div>
      </nav>
    );
  }
}