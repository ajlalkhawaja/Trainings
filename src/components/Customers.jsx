import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import SectionHeading from './SectionHeading';
import Slider from './Slider';

export default class Customers extends Component {
  render() {
    return (
      <div className="customer-wrapper">
        <Row>
          <Col xs="6" className="text-left">
            <SectionHeading
              subHeading="OUR TESTIMONIALS"
              heading="Happy Client Says"
            />
            <Button className="btn btn-theme">Learn More</Button>
          </Col>
          <Col xs="6">
            <div className="slider">
              <Slider />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
