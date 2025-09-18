import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from 'react-scroll-parallax';
import myImg from "../Assets/a.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Home() {
  return (
    <Container fluid className="home-section" id="home">
      <Parallax speed={-20}>
        <Container className="home-content">
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <Tilt className="myAvtar">
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
            <Col md={12} className="home-header">
              <h1 className="heading-name">
                Hi, I'm
                <span className="bold"><b> Alfred Lee</b></span>
              </h1>
              <h1 style={{ paddingBottom: 15 }} className="subtitle">
                Senior Computer Science Student at Clemson University
              </h1>

            </Col>

          </Row>
          <Row>
            <Col md={12} className="home-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="bold">connect </span>with me
              </p>
              <ul className="home-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/leealfreds"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/alfred-lee-7a837922b/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Parallax>
    </Container>
  );
}

export default Home;
