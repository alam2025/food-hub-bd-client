import React, { useState } from 'react';
import logo from './../../../assets/logo.png'

import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigateBar = () => {

      return (
            <div >
                  <Navbar expand="lg mb-2">
                        <Container fluid>
                              <Navbar.Brand href="#"><img className=' w-25' src={logo} alt="" /></Navbar.Brand>
                              <Navbar.Toggle aria-controls="navbarScroll" />
                              <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                          className="me-3 my-2 my-lg-0 d-flex gap-4 "
                                          style={{ maxHeight: '100px' }}
                                          navbarScroll >
                                          <Link to='/' className=' text-decoration-none text-dark'>Home</Link>
                                          <Link to='/blog' className='text-dark text-decoration-none'>Blog</Link>
                                    </Nav>

                                    <div className="d-flex gap-3">
                                          <Link to='/login' className=' text-decoration-none text-dark'>Login</Link>
                                          <Link to='/register' className=' text-decoration-none text-dark'>Register</Link>

                                    </div>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default NavigateBar;