import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import banner1 from './../../../assets/banner-1.jpg'
import banner2 from '../../../assets/banner-2.jpg'
import banner3 from '../../../assets/banner3.png'

const Banner = () => {
      return (
            <div>
                  <Carousel>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={banner3}
                                    alt="First slide"
                              />
                              <Carousel.Caption>
                                    <h1 className=' fw-bolder' >Deliciousness </h1>
                                    <h4>FRESH AND SPICY</h4>
                                    <p>
                                          Enjoy the deliciousness meal under the vibrant lights. Bollywood Stories Indian Restaurant had always been colourful.


                                    </p>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={banner2}
                                    alt="Second slide"
                              />

                              <Carousel.Caption>
                                    <h1 className=' fw-bolder' >Fish Tikka  </h1>
                                    <h4>FRESH AND SPICY</h4>
                                    <p> Enjoy the deliciousness meal under the vibrant lights. Bollywood Stories Indian Restaurant had always been colourful.</p>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                              <img
                                    className="d-block w-100"
                                    src={banner1}
                                    alt="Third slide"
                              />

                              <Carousel.Caption  >
                                    <h1 className=' fw-bolder' >Deliciousness </h1>
                                    <h4>FRESH AND SPICY</h4>
                                    <p>
                                          Enjoy the deliciousness meal under the vibrant lights. Bollywood Stories Indian Restaurant had always been colourful.


                                    </p>
                              </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>
            </div>
      );
};

export default Banner;