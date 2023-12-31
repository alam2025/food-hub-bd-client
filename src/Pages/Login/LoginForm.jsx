import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const LoginForm = () => {
      const navigate= useNavigate()
      const [success, setSuccess] = useState('')
      const [error, setError] = useState('')
      const { userSignIn } = useContext(AuthContext);
      const { googleSignIn } = useContext(AuthContext);
      const { githubSignIn } = useContext(AuthContext);
      const location = useLocation();
      
      // console.log(location);
      const from = location.state?.from?.pathname || '/';
      // console.log(from);

      const handleSubmit = (event) => {
            event.preventDefault();

            setSuccess('')
            setError('')

            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;

            userSignIn(email, password)
                  .then(result => {
                        const user = result.user;
                        console.log(user);
                        setSuccess('Successfully Login')
                        navigate(from, {replace:true})
                  }).catch(error => setError(error.message))

      };

      const handleGoogleSignIn = () => {
            setSuccess('')
            setError('')
            googleSignIn()
                  .then(result => {

                        const user = result.user;
                        console.log(user);
                        setSuccess('Successfully Login')
                        navigate(from, {replace:true})
                  }).catch(error => setError(error.message))

      }

      const handleGithubSignIn = () => {
            setSuccess('')
            setError('')
            githubSignIn()
                  .then(result => {
                        const user = result.user;
                        console.log(user);
                        setSuccess('Successfully Login')
                        navigate(from, {replace:true})
                  }).catch(error => setError(error.message))
      }

      return (
            <div className=' sm-w-90 md-w-70 lg-w-60 mx-auto border p-5 mt-3 mb-5 rounded'>
                  <h3>Please Login</h3>
                  {success && <p className=' text-success'>{success}</p>}
                  {error && <p className=' text-danger'>{error}</p>}
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





                  </Form>
                  <div className=' d-flex flex-column justify-content-center align-items-center gap-2'>
                        <Button onClick={handleGoogleSignIn} className='d-flex justify-content-center align-items-center gap-2 bg-white' variant="light">
                              <FcGoogle size={25} />
                              <span>Sign In With Google</span>

                        </Button>
                        <Button onClick={handleGithubSignIn} className='d-flex justify-content-center align-items-center gap-2' variant="secondary">
                              <FaGithub size={25} />
                              <span>Sign In With GitHub</span>

                        </Button>
                        <p>Don't Have an Account? Please <Link to='/register'>Register</Link></p>
                  </div>
            </div>
      );
};

export default LoginForm;
