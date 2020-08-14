import React, { Component } from "react";
import {
  NavLink,
    Route,
    HashRouter
  } from "react-router-dom";

import Home from "../home/Home";
import Resume from "../resume/Resume";
import Contact from "../contact/Contact";
 
class NavHeader extends Component {
  render() {
    return (
        <HashRouter>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Resume">Resume</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/Resume" component={Resume}/>
                <Route path="/contact" component={Contact}/>
            </div>
      </HashRouter>
    );
  }
}
 
export default NavHeader;