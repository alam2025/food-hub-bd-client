import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
      return (
            <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
                  <Container>
                        <Row>
                              <Col sm={4} className="text-center text-sm-start">
                                    <h5>Food-Hub-Bd</h5>
                                    <p>A place for foodies</p>
                              </Col>
                              <Col sm={4} className="text-center">
                                    <h5>Contact Us</h5>
                                    <p>Phone: +8801XXXXXXXXX</p>
                                    <p>Email: foodhubbd@gmail.com</p>
                              </Col>
                              <Col sm={4} className="text-center text-sm-end">
                                    <h5>Follow Us</h5>
                                    <p>Facebook</p>
                                    <p>Twitter</p>
                                    <p>Instagram</p>
                              </Col>
                        </Row>
                        <Row className="mt-3">
                              <Col sm={12} className="text-center">
                                    <p>© 2023 Food-Hub-Bd. All rights reserved.</p>
                              </Col>
                        </Row>
                  </Container>
            </footer>
      );
};

export default Footer;