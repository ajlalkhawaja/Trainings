import React, { Component } from 'react';
import SectionHeading from './SectionHeading';
import Masonry from 'react-masonry-css';
import JeremyPerkins from '../assets/images/jeremy-perkins.jpg';
import FlorianKlauer from '../assets/images/florian-klauer.jpg';
import OliverPecker from '../assets/images/oliver-pecker.jpg';
import ColinCarter from '../assets/images/colin-carter.jpg';
import NagyArnold from '../assets/images/nagy-arnold-X.jpg';
import MukulWadhwa from '../assets/images/mukul-wadhwa.jpg';
import AirPods from '../assets/images/air-pods.jpg';
import Julian from '../assets/images/julian-o-hayon-unsplash.jpg';
export default class Portfolio extends Component {
  render() {
    const breakpointColumnsObj = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    return (
      <div className="portfolio-wrapper">
        <SectionHeading heading="Portfolio Showcase" />
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <div>
            <img src={JeremyPerkins} alt="" />
          </div>
          <div>
            <img src={FlorianKlauer} alt="" />
          </div>
          <div>
            <img src={OliverPecker} alt="" />
          </div>
          <div>
            <img src={ColinCarter} alt="" />
          </div>
          <div>
            <img src={NagyArnold} alt="" />
          </div>
          <div>
            <img src={MukulWadhwa} alt="" />
          </div>
          <div>
            <img src={AirPods} alt="" />
          </div>
          <div></div>
          <div>
            <img src={Julian} alt="" />
          </div>
        </Masonry>
      </div>
    );
  }
}
