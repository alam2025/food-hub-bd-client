import React, { useContext, useState } from 'react';
import logo from './../../../assets/logo.png'
import { CgProfile } from "react-icons/cg";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigateBar = () => {
      const { user, logOut } = useContext(AuthContext)
      const [isHovering, setIsHovering] = useState(false);


      const handleSignOut = () => {
            logOut()
                  .then(() => {
                        const [isHovering, setIsHovering] = useState(false);

                        console.log('successfully signout');
                  }).catch((error) => {
                        console.log(error.message);
                  });

      }
      return (
            <div className='container'>
                  <Navbar expand="lg mb-2">
                        <Container fluid>
                              <Navbar.Brand href="/"><img className=' w-25' src={logo} alt="" /></Navbar.Brand>
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
                                                <div>
                                                      <div className='position-relative'>
                                                            {user.photoURL ? (
                                                                  <img
                                                                        style={{ width: '60px', height: '60px' }}
                                                                        className='bg-light me-3 rounded-circle'
                                                                        src={user?.photoURL}
                                                                        alt='profile'
                                                                        onMouseEnter={() => setIsHovering(true)}
                                                                        onMouseLeave={() => setIsHovering(false)}
                                                                  />
                                                            ) : (
                                                                  <CgProfile className='me-3' size={40} />
                                                            )}
                                                            <div style={{fontSize:'8px', top:'10px', fontWeight:'700'}} className={`hover-display-name position-absolute text-white  fs-6 ${isHovering ? 'd-block' : 'd-none'}`}>
                                                                  {user.displayName}
                                                            </div>
                                                      </div>
                                                </div>

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