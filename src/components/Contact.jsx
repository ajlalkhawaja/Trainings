import React, { Component } from 'react';
import SectionHeading from './SectionHeading';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper mt-100">
        <SectionHeading subHeading="HAVE ANY QUERY?" heading="Contact Me" />
        <Row>
          <Col xs="4">
            <div className="contactme-details">
              <div className="social-icons">
                <FontAwesomeIcon
                  icon={['fas', 'map-marker']}
                  className="custom-icon"
                />
              </div>
              <a href="#">
                Locate Us
                <p>Johar town,Block-B, Lahore, Pakistan</p>
              </a>
            </div>
          </Col>
          <Col xs="4">
            <div className="contactme-details">
              <div className="social-icons">
                <FontAwesomeIcon
                  icon={['fas', 'phone']}
                  className="custom-icon"
                />
              </div>
              <a href="tel:03218546286">
                Give me a call
                <p>Office: +92(321)-8546286</p>
              </a>
            </div>
          </Col>
          <Col xs="4">
            <div className="contactme-details">
              <div className="social-icons">
                <FontAwesomeIcon
                  icon={['fas', 'envelope-open']}
                  className="custom-icon"
                />
              </div>
              <a href="mailto:ajlalkhawaja1@gmail.com">
                Get in online
                <p>ajlalkhawaja1@gmail.com</p>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="message">
          <Col xs="6">
            <FormGroup>
              <Label for="exampleName"></Label>
              <Input
                type="text"
                name="text"
                id="exampleName"
                placeholder="Your Name"
              />
            </FormGroup>
          </Col>
          <Col xs="6">
            <FormGroup>
              <Label for="exampleEmail"></Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Your Email"
              />
            </FormGroup>
          </Col>
          <Col xs="12">
            <FormGroup>
              <Label for="exampleSubject"></Label>
              <Input
                type="text"
                name="text"
                id="exampleSubject"
                placeholder="Your Subject"
              />
            </FormGroup>
          </Col>
          <Col xs="12">
            <FormGroup>
              <Label for="exampleMessage"></Label>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                placeholder="Your Message"
              />
            </FormGroup>
          </Col>
          <Button className="btn btn-theme btn active btn-secondary">
            Send Message
          </Button>
        </Row>
      </div>
    );
  }
}
