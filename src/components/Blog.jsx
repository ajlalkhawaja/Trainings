import React, { Component } from 'react';
import SectionHeading from './SectionHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Blog01 from '../assets/images/blog-1.jpg';
import Blog02 from '../assets/images/blog-2.jpg';
import Blog03 from '../assets/images/blog-3.jpg';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
export default class Blog extends Component {
  render() {
    return (
      <div className="mt-100">
        <SectionHeading subHeading="LATEST POST" heading="Latest Blog" />
        <Row className="blog-wrapper">
          <Col xs="4">
            <Card>
              <CardImg top width="100%" src={Blog01} alt="Card image cap" />
              <CardBody>
                <div className="blog-details">
                  <div className="social-icons">
                    <FontAwesomeIcon
                      icon={['fas', 'user']}
                      className="custom-icon"
                    />
                    <span>
                      By<a href="#">admin</a>
                    </span>
                  </div>
                  <div className="social-icons">
                    <FontAwesomeIcon
                      icon={['fas', 'calendar']}
                      className="custom-icon"
                    />
                    <span>Tuesday</span>
                  </div>
                  <div className="social-icons">
                    <FontAwesomeIcon
                      icon={['fas', 'comment']}
                      className="custom-icon"
                    />
                    <span>3</span>
                  </div>
                </div>
                <CardText>Ten Secrets You Will Not Want To Know</CardText>
                <a href="#">
                  Read more
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-circle-right']}
                    className="custom-icon"
                  />
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Card>
              <CardImg top width="100%" src={Blog02} alt="Card image cap" />
              <CardBody>
                <div className="blog-details">
                  <div className="social-icons">
                    <FontAwesomeIcon
                      icon={['fas', 'user']}
                      className="custom-icon"
                    />
                    <span>
                      By<a href="#">admin</a>
                    </span>
                  </div>
                  <div className="social-icons">
                    <FontAwesomeIcon
                      icon={['fas', 'calendar']}
                      className="custom-icon"
                    />
                    <span>Wednesday</span>
                  </div>
                  <div className="social-icons">
                    <FontAwesomeIcon
                      icon={['fas', 'comment']}
                      className="custom-icon"
                    />
                    <span>3</span>
                  </div>
                </div>
                <CardText>
                  You’ve gotta dance like there’s nobody watching
                </CardText>
                <a href="#">
                  Read more
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-circle-right']}
                    className="custom-icon"
                  />
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Card>
              <CardImg top width="100%" src={Blog03} alt="Card image cap" />
              <CardBody>
                <div className="blog-details">
                  <div className="social-icons">
                    <FontAwesomeIcon
                      icon={['fas', 'user']}
                      className="custom-icon"
                    />
                    <span>
                      By<a href="#">admin</a>
                    </span>
                  </div>
                  <div className="social-icons">
                    <FontAwesomeIcon
                      icon={['fas', 'calendar']}
                      className="custom-icon"
                    />
                    <span>Thursday</span>
                  </div>
                  <div className="social-icons">
                    <FontAwesomeIcon
                      icon={['fas', 'comment']}
                      className="custom-icon"
                    />
                    <span>3</span>
                  </div>
                </div>
                <CardText>
                  I must explain to you how all this mistaken idea
                </CardText>
                <a href="#">
                  Read more
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-circle-right']}
                    className="custom-icon"
                  />
                </a>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
