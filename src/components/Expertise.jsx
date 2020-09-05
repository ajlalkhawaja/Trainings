import React, { Component } from 'react';
import SectionHeading from './SectionHeading';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Progress,
  CardBody,
  CardImg,
} from 'reactstrap';
export default class Expertise extends Component {
  render() {
    return (
      <div className="expertise-wrapper pt-5">
        <Row className="align-items-center">
          <Col xs="6" className="text-left">
            <SectionHeading
              subHeading="I'M EXPERT IN"
              heading="Let's Work Together"
            />
          </Col>
          <Col xs="6">
            <div className="skills-section">
              <div className="skills-wrapper">
                <p>HTML</p>
                95%
                <Progress value={95} color="danger" />
              </div>
              <div className="skills-wrapper">
                <p>CSS</p>
                95%
                <Progress value={95} color="danger" />
              </div>
              <div className="skills-wrapper">
                <p>Bootstrap</p>
                80%
                <Progress value={80} color="danger" />
              </div>
              <div className="skills-wrapper">
                <p>SCSS/LESS</p>
                95%
                <Progress value={95} color="danger" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
