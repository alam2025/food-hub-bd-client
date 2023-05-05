import React, { useContext, useState } from 'react';
import logo from './../../../assets/logo.png'
import { CgProfile } from "react-icons/cg";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigateBar = () => {
      const { user, logOut } = useContext(AuthContext)
      const [isHovering, setIsHovering] = useState(false);
      const location = useLocation();

      const handleSignOut = () => {
            logOut()
                  .then(() => {
                        setIsHovering(false);
                        console.log('successfully signout');
                  }).catch((error) => {
                        console.log(error.message);
                  });

      }

      return (
            <div className='container mb-5'>
                  <Navbar expand="lg mb-2">
                        <Container fluid>
                              <Link to='/'><Navbar.Brand ><img className=' w-25' src={logo} alt="" /></Navbar.Brand></Link>
                              <Navbar.Toggle aria-controls="navbarScroll" />
                              <Navbar.Collapse id="navbarScroll ">
                                    <Nav className="me-2 my-2 my-lg-0 d-flex gap-4 "
                                          style={{ maxHeight: '100px' }}
                                          navbarScroll >

                                          <Link to='/' className={`text-decoration-none text-dark px-2 py-1 ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>

                                          <Link to='/blog' className={`text-decoration-none px-2 py-1 text-dark ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link>

                                          <Link to='/favourite' className={`position-relative text-decoration-none me-5 px-2 py-1 text-dark ${location.pathname === '/favourite' ? 'active' : ''}`}>

                                                Favourite

                                          </Link>
                                    </Nav>

                                    {user ? (
                                          <>
                                                <div>
                                                      <div className='position-relative'>
                                                            {user.photoURL ? (
                                                                  <Link to='/profile'>
                                                                        <img
                                                                              style={{ width: '60px', height: '60px' }}
                                                                              className='bg-light me-3 rounded-circle'
                                                                              src={user?.photoURL}
                                                                              alt='profile'
                                                                              onMouseEnter={() => setIsHovering(true)}
                                                                              onMouseLeave={() => setIsHovering(false)}
                                                                        />
                                                                  </Link>
                                                            ) : (
                                                                  <CgProfile className='me-3' size={40} />
                                                            )}
                                                            <h6 style={{width:'120px', marginLeft:'-30px', fontSize: '8px', top: '70px', fontWeight: '700' }} className={`hover-display-name py-2 rounded px- position-absolute text-white ps-2 fs-6 bg-dark ${isHovering ? 'd-block' : 'd-none'}`}>
                                                                  {user.displayName}
                                                            </h6>
                                                      </div>
                                                </div>

                                                <Button onClick={handleSignOut} variant='outline-secondary'>Logout</Button>
                                          </>
                                    ) : (
                                          <>
                                                <div className="d-flex gap-3">
                                                      <Link to='/login' className={`text-decoration-none px-2 py-1 text-dark 
                                                      ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>
                                                </div>
                                          </>
                                    )}
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default NavigateBar;
