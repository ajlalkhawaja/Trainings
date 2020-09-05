import React, { Component } from 'react';
import SectionHeading from './SectionHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class FooterSection extends Component {
  render() {
    return (
      <div className="footer pt-50">
        <SectionHeading heading="Logo" />
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
        </div>
      </div>
    );
  }
}
