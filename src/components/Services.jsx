import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

export default class Services extends Component {
  render() {
    return (
      <div className="my-services">
        <Row>
          <Col sm="4">
            <Card body>
              <div className="social-icons">
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  className="custom-icon"
                />
              </div>
              <CardTitle>Web Development</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <div className="social-icons">
                <FontAwesomeIcon
                  icon={['fab', 'codepen']}
                  className="custom-icon"
                />
              </div>
              <CardTitle>Web Design</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <div className="social-icons">
                <FontAwesomeIcon
                  icon={['fas', 'video']}
                  className="custom-icon"
                />
              </div>
              <CardTitle>Video Editing</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <div className="social-icons">
                <FontAwesomeIcon
                  icon={['fas', 'camera']}
                  className="custom-icon"
                />
              </div>
              <CardTitle>Photography</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <div className="social-icons">
                <FontAwesomeIcon
                  icon={['fab', 'apple']}
                  className="custom-icon"
                />
              </div>
              <CardTitle>Apple Developing</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <div className="social-icons">
                <FontAwesomeIcon
                  icon={['fab', 'yoast']}
                  className="custom-icon"
                />
              </div>
              <CardTitle>SEO Expert</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
