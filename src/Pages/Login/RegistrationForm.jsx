import React, { useContext, useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const RegistrationForm = () => {
      const navigate= useNavigate()
      const { createUser, userProfile,logOut } = useContext(AuthContext);
      const [success, setSuccess]=useState('')
      const [error, setError]=useState('')

      const handleSubmit = (event) => {
            event.preventDefault();

            setSuccess('')
            setError('')

            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            const name = form.name.value;
            const photoUrl = form.photourl.value;
            if(password.lenght < 6){
                  setError('Password atleast 6 characters.')
            }

            createUser(email, password)
                  .then(result => {
                        const user = result.user;
                        userProfile(name, photoUrl)
                       alert('Successfully Registered !!! Please login.')
                        logOut()
                        setError('')
                        navigate('/login')

                  }).catch(error => {
                        console.log(error.message)
                        setError(error.message)
                        setSuccess('')
                  })

            

      };

      return (
            <div className=' sm-w-90 md-w-70 lg-w-60 mx-auto border p-5 mt-3 mb-5 rounded'>

                  <h3>Please Registration</h3>
                  {success && <p className=' text-success'>{success}</p>}
                  {error && <p className=' text-danger'>{error}</p>}
                  <Form className=' d-flex flex-column gap-4' onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername">
                              <Form.Label>Username</Form.Label>
                              <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    name='name'
                                    required

                              />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control
                                    type="email"
                                    placeholder="Enter email"
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

                        <Form.Group controlId="formBasicPhotoUrl">
                              <Form.Label>Photo URL</Form.Label>
                              <Form.Control
                                    type="text"
                                    placeholder="Enter photo URL"
                                    name='photourl'

                              />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                              <Form.Check
                                    type="checkbox"
                                    label="I accept the terms and conditions"

                              />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                              Register
                        </Button>
                        <p>Have You already an Account? Please <Link to='/login'>Login</Link></p>
                  </Form>
            </div>
      );
};

export default RegistrationForm;
