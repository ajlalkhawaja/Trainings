import React, { Component } from 'react';
import logo01 from '../assets/images/logo-01.png';
import logo02 from '../assets/images/logo-02.png';
import logo03 from '../assets/images/logo-03.png';
import logo04 from '../assets/images/logo-04.png';
import logo05 from '../assets/images/logo-05.png';
export default class Partners extends Component {
  render() {
    return (
      <div className="partners-wrapper">
        <ul>
          <li>
            <a href="#">
              <img src={logo01} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logo02} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logo03} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logo04} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logo05} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
