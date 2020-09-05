import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BannerImg from '../assets/images/ajlal-transparent.png';

function Banner() {
  return (
    <div className="banner-wrapper">
      <Row className="align-items-center">
        <Col xs="12" sm="6">
          <div className="social-details">
            <div className="social-icons">
              <FontAwesomeIcon
                icon={['fab', 'facebook']}
                className="custom-icon"
              />
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
                className="custom-icon"
              />
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                className="custom-icon"
              />
              <FontAwesomeIcon
                icon={['fab', 'twitter']}
                className="custom-icon"
              />
            </div>
            <h1>
              I am Ajlal Khawaja
              <p>
                I'm Ajlal, professional UI/UX Developer with long time
                experience in this field.
              </p>
            </h1>
            <div className="btn-grop">
              <button type="button" className="btn btn-primary">
                My Portfolio
              </button>
              <button type="button" className="btn"></button>
            </div>
          </div>
        </Col>
        <Col xs="12" sm="6">
          <div className="banner-img-holder">
            <img src={BannerImg} alt="Ajlal Banner" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Banner;
