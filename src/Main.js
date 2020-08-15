import React, { Component } from "react";
import NavHeader from "./common/NavHeader";
import Content from "./common/Content";
 
class Main extends Component {
  render() {
    return (
      <div id="background">
          <NavHeader />
          <Content />
      </div>
    );
  }
}
 
export default Main;