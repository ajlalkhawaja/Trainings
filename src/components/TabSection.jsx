import React, { Component, useState } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import tabImage from '../assets/images/ajlal-transparent.png';
import Services from './Services';
import AboutMe from './AboutMe';

export default class TabSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
    };

    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="tab-section mt-5">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                this.setActiveTab('1');
              }}
            >
              About Me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                this.setActiveTab('2');
              }}
            >
              My Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => {
                this.setActiveTab('3');
              }}
            >
              My services
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <AboutMe />
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div className="skills-section">
                  <div className="w-50 skills-wrapper">
                    <p>HTML</p>
                    95%
                    <Progress value={95} color="danger" />
                  </div>
                  <div className=" w-50 skills-wrapper">
                    <p>CSS</p>
                    95%
                    <Progress value={95} color="danger" />
                  </div>
                  <div className=" w-50 skills-wrapper">
                    <p>Bootstrap</p>
                    80%
                    <Progress value={80} color="danger" />
                  </div>
                  <div className=" w-50 skills-wrapper">
                    <p>SCSS/LESS</p>
                    95%
                    <Progress value={95} color="danger" />
                  </div>
                  <div className=" w-50 skills-wrapper">
                    <p>JavaScript</p>
                    65%
                    <Progress value={65} color="danger" />
                  </div>
                  <div className=" w-50 skills-wrapper">
                    <p>jQuery</p>
                    45%
                    <Progress value={45} color="danger" />
                  </div>
                  <div className=" w-50 skills-wrapper">
                    <p>Angular</p>
                    45%
                    <Progress value={45} color="danger" />
                  </div>
                  <div className=" w-50 skills-wrapper">
                    <p>React</p>
                    45%
                    <Progress value={45} color="danger" />
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Services />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
