import React, { Component } from "react";
import Box from "../common/Box";
import Image from 'react-bootstrap/Image';
import ProfilePic from '../common/pictures/profile2020.jpg';
import "./Home.css";
 
class Home extends Component {
  render() {
    return (
      <div>
        <div className="greetAndPhoto">
        <span id="profile"><Box><Image src={ProfilePic} thumbnail width="20%" height="20%"/></Box></span>
          <Box>
            <h1>Welcome!</h1>
            <p>My name's Melissa, and I'm currently at the University of Southern California studying Computer Engineering and Computer Science.</p>
            <p>This React webapp started as a fun summer project that I'll keep building upon as I learn more. I hope to add even more cool features in addition to my future career updates.</p>
            <p>Thanks for visiting!</p> 
          </Box>
        </div>
      </div>
    );
  }
}
 
export default Home;