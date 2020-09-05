import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import TabSection from './components/TabSection';
import { Container } from 'reactstrap';
import Services from './components/Services';
import SectionHeading from './components/SectionHeading';
import AboutMe from './components/AboutMe';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Widget from './components/Widget';
import Partners from './components/Partners';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FooterSection from './components/FooterSection';

import Slider from './components/Slider';

import Customers from './components/Customers';

function Main(props) {
  return (
    <div>
      {/* <h1>{props.name}</h1> */}
      <Header name={props.name} />
      <Container>
        <Banner />
        <TabSection />
        <SectionHeading subHeading="SERVICES" heading="My Services" />
        <Services />
      </Container>
      <div className="bg-color pt-5">
        <Container>
          <SectionHeading heading="About Me" />
          <AboutMe />
        </Container>
      </div>
      <Container>
        <Expertise />
      </Container>
      <div className="bg-color pt-5">
        <Container>
          <Portfolio />
        </Container>
      </div>
      <Container>
        <Pricing />
      </Container>
      <div className="bg-color">
        <Container>
          <Widget />
        </Container>
      </div>
      <Container>
        <Customers />
      </Container>
      <div className="bg-color">
        <Container>
          <Partners />
        </Container>
      </div>
      <Container>
        <Blog />
        <Contact />
      </Container>
      <div className="bg-color">
        <Container>
          <FooterSection />
        </Container>
      </div>
    </div>
  );
}
export default Main;
