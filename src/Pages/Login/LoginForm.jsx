import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const LoginForm = () => {
      const { userSignIn } = useContext(AuthContext);

      const handleSubmit = (event) => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;

            userSignIn(email, password)
                  .then(result => {
                        const user = result.user;
                        console.log(user);
                  }).catch(error => console.log(error.message))

      };

      return (
            <div className=' sm-w-90 md-w-70 lg-w-60 mx-auto border p-5 mt-3 mb-5 rounded'>
                  <h3>Please Login</h3>
                  <Form className=' d-flex flex-column gap-4' onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername">
                              <Form.Label>Email Address</Form.Label>
                              <Form.Control
                                    type="email"
                                    placeholder="Enter your Email"
                                    name='email'
                                    required

                              />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    name='password'
                                    required

                              />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                              Login
                        </Button>
                        

                        <Button className='d-flex justify-content-center align-items-center gap-2 bg-white' variant="light">
                              <FcGoogle size={25} />
                              <span>Sign In With Google</span>

                        </Button>
                        <Button className='d-flex justify-content-center align-items-center gap-2' variant="secondary">
                              <FaGithub  size={25}/>
                              <span>Sign In With GitHub</span>

                        </Button>
                        <p>Don't Have an Account? Please <Link to='/register'>Register</Link></p>
                  </Form>
            </div>
      );
};

export default LoginForm;