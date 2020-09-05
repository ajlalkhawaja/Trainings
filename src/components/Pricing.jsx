import React, { Component } from 'react';
import SectionHeading from './SectionHeading';
import { Button, Row, Col } from 'reactstrap';

export default class Pricing extends Component {
  render() {
    return (
      <div className="pricing-wrapper">
        <SectionHeading subHeading="CHOOSE A PLAN" heading="Pricing Plan" />
        <div className="pricing-card">
          <Row>
            <Col xs="4">
              <div className="pricing-table">
                <h4>Basic</h4>
                <h3>
                  <span>$</span>50
                </h3>
                <ul>
                  <li>5GB Storage Space</li>
                  <li>20GB Monthly Bandwidth</li>
                  <li>My SQL Databases</li>
                  <li>100 Email Account</li>
                  <li>10 Free Domain Names</li>
                </ul>
                <Button type="button" className="btn btn-theme">
                  Purchase
                </Button>
              </div>
            </Col>
            <Col xs="4">
              <div className="pricing-table recommended">
                <strong>Recommended</strong>
                <h4>Standard</h4>
                <h3>
                  <span>$</span>80
                </h3>
                <ul>
                  <li>5GB Storage Space</li>
                  <li>20GB Monthly Bandwidth</li>
                  <li>My SQL Databases</li>
                  <li>100 Email Account</li>
                  <li>10 Free Domain Names</li>
                </ul>
                <Button type="button" className="btn btn-theme active">
                  Purchase
                </Button>
              </div>
            </Col>
            <Col xs="4">
              <div className="pricing-table">
                <h4>Premium</h4>
                <h3>
                  <span>$</span>160
                </h3>
                <ul>
                  <li>5GB Storage Space</li>
                  <li>20GB Monthly Bandwidth</li>
                  <li>My SQL Databases</li>
                  <li>100 Email Account</li>
                  <li>10 Free Domain Names</li>
                </ul>
                <Button type="button" className="btn btn-theme">
                  Purchase
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
