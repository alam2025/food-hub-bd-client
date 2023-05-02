import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import bgImg from './../../../assets/1011-1-1140x500.jpg'

const Banner = () => {
      return (
            <div>
                  <Carousel>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={bgImg}
                              alt="First slide"
                        />
                        <Carousel.Caption>
                              <h3>First slide label</h3>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={bgImg}
                              alt="Second slide"
                        />

                        <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={bgImg}
                              alt="Third slide"
                        />

                        <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                              </p>
                        </Carousel.Caption>
                  </Carousel.Item>
            </Carousel>
            </div>
      );
};

export default Banner;