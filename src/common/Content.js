import React, { Component } from "react";
import {
    Route,
    HashRouter,
    Switch
  } from "react-router-dom";

import Home from "../home/Home";
import Resume from "../resume/Resume";
import Contact from "../contact/Contact";
 
class Content extends Component {
  render() {
    return (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Resume' component={Resume} />
            <Route path='/Contact' component={Contact} />
        </Switch>
      </HashRouter>
    );
  }
}
 
export default Content;