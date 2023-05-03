import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = () => {

      const handleSubmit = (event) => {
            event.preventDefault();
            console.log('Submitting form with', { username, password });
            // TODO: handle form submission
      };

      return (
            <div className=' sm-w-90 md-w-70 lg-w-60 mx-auto border p-5 mt-3 mb-5 rounded'>
                  <h3>Please Login</h3>
                  <Form className=' d-flex flex-column gap-4' onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername">
                              <Form.Label>Username</Form.Label>
                              <Form.Control
                                    type="text"
                                    placeholder="Enter username"

                              />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                    type="password"
                                    placeholder="Enter password"

                              />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                              Login
                        </Button>
                        <p>Don't Have an Account? Please <Link to='/register'>Register</Link></p>
                  </Form>
            </div>
      );
};

export default LoginForm;
