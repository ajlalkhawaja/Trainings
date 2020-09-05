import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Row, Col } from 'reactstrap';
export default class Widget extends Component {
  render() {
    return (
      <div className="widget-wrapper">
        <Row>
          <Col xs="3">
            <div className="social-icons">
              <FontAwesomeIcon
                icon={['fas', 'users']}
                className="custom-icon"
              />
            </div>
            <h2>
              47
              <span>Clients</span>
            </h2>
          </Col>
          <Col xs="3">
            <div className="social-icons">
              <FontAwesomeIcon
                icon={['fab', 'codepen']}
                className="custom-icon"
              />
            </div>
            <h2>
              64
              <span>Projects</span>
            </h2>
          </Col>
          <Col xs="3">
            <div className="social-icons">
              <FontAwesomeIcon icon={['fas', 'gem']} className="custom-icon" />
            </div>
            <h2>
              16
              <span>Awards</span>
            </h2>
          </Col>
          <Col xs="3">
            <div className="social-icons">
              <FontAwesomeIcon
                icon={['fab', 'github']}
                className="custom-icon"
              />
            </div>
            <h2>
              4<span>Years Experience</span>
            </h2>
          </Col>
        </Row>
      </div>
    );
  }
}
