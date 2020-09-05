import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import tabImage from '../assets/images/ajlal-transparent.png';
export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme-section">
        <Row>
          <Col
            sm="6"
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src={tabImage}
              width="200"
              height="100"
              className="text-center"
              alt="Tab image"
            />
          </Col>
          <Col sm="6" className="text-left">
            <h2>Hi There</h2>
            <p>
              My name is Khawaja Ajlal Haider. I completed my postgraduate
              degree from the University of Management and Technology Lahore . I
              am now working as a UI / UX Developer at SYSTEMS LIMITED. I had
              FRONT END DEVELOPER 2019 CAREER COURSE certification from UDEMY,
              too. My Resume also listed other interesting internships.
            </p>
            <span className="contact-details">
              <span>Name:</span>
              <strong>Ajlal Khawaja</strong>
            </span>
            <span className="contact-details">
              <span>Phone:</span>
              <a href="tel:(+92)321-8546286">(+92)321-8546286</a>
            </span>
            <span className="contact-details">
              <span>Email:</span>
              <a href="mailto:ajlalkhawaja1@gmail.com">
                ajlalkhawaja1@gmail.com
              </a>
            </span>
            <span className="contact-details">
              <span>LinkedIn:</span>
              <a
                href="mailto: https://www.linkedin.com/in/ajlal-khawaja-6b70636b/"
                target="/blank"
              >
                linkedin.com/in/ajlal-khawaja
              </a>
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}
