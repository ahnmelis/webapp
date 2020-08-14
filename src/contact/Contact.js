import React, { Component } from "react";
import SocialFollow from "../common/SocialFollow";
import Box from "../common/Box";
 
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Box>
          <h2>Melissa Ahn</h2>
          <h3>University of Southern California</h3>
          <h3><i>B.S. Computer Engineering and Computer Science '21</i></h3>
          <h3><i>M.S. Computer Science '21</i></h3>
          <span id="social"><SocialFollow /></span>
        </Box>
      </div>
    );
  }
}
 
export default Contact;