import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Rung.css";
 
class Rung extends Component {
  render() {
    const iconStyle = {
      color: this.props.color
    };
    return (
      <div>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey}>
                <div className="positionAndDate"><span id="position">{this.props.position}</span> <span id="date">{this.props.date}</span></div>
                <div className="companyAndLocation"><span id="company">{this.props.company}</span><span style={iconStyle}><FontAwesomeIcon icon={this.props.icon} size="2x" className="icons" /></span><span id="location">{this.props.location}</span></div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={this.props.eventKey}>
              <Card.Body>{this.props.children}</Card.Body>
            </Accordion.Collapse>
          </Card>
      </div>
    );
  }
}
 
export default Rung;