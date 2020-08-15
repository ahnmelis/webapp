import React, { Component } from "react";
import {
    HashRouter,
    NavLink
  } from "react-router-dom";
import { Navbar} from 'react-bootstrap';
import "./NavHeader.css";
 
class NavHeader extends Component {
  render() {
    return (
        <HashRouter>
        <Navbar className="navBar" expand="lg"  >
            <Navbar.Brand id="name" as={NavLink} to="/">Melissa Ahn</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <NavLink className="link" activeClassName="active" as={NavLink} exact to="/">Home</NavLink>
                <NavLink className="link" activeClassName="active" as={NavLink} to="/Resume">Resume</NavLink>
                <NavLink className="link" activeClassName="active" as={NavLink} to="/Contact">Contact</NavLink>
            </Navbar.Collapse>
        </Navbar>
      </HashRouter>
    );
  }
}
 
export default NavHeader;