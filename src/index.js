import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faLinkedin,
  faGithub,
  faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { 
  faHandPeace, 
  faGasPump } from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedin, faGithub, faMicrosoft, faHandPeace, faGasPump);
 
ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);