import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Header(props) {
  return (
    <div className="App">
      {/* Header {props.name[0]} {props.name[1]} {props.name[2]} */}
      {/* Header {props.name} */}
      <Container>
        <Row>
          <Col>
            <div className="header-container">
              <div className="logo">Logo</div>
              <ul className="navigation">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Skills</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
