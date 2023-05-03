import React, { useContext, useState } from 'react';
import logo from './../../../assets/logo.png'
import { CgProfile } from "react-icons/cg";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigateBar = () => {
      const { user, logOut } = useContext(AuthContext)

      const handleSignOut = () => {
            logOut()
                  .then(() => {
                        console.log('successfully signout');
                  }).catch((error) => {
                        console.log(error.message);
                  });

      }
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

                                    {
                                          user ? <>
                                                {
                                                      user.photoURL ? <>
                                                            <img className=' bg-light me-3 rounded-circle w-25' src={user?.photoURL} alt="profile" />
                                                      </> : <CgProfile className=' me-3' size={40}/>
                                                }
                                                <Button onClick={handleSignOut} variant='outline-secondary'>Logout</Button>
                                          </>
                                                : <>
                                                      <div className="d-flex gap-3">
                                                            <Link to='/login' className=' text-decoration-none text-dark'>Login</Link>
                                                      </div>
                                                </>
                                    }
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default NavigateBar;