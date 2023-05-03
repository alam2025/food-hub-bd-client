import React from 'react';
import NavigateBar from '../Shared/Header/NavigateBar';
import Footer from '../Shared/Footer';
import LoginForm from './LoginForm';


const Login = () => {
      return (
            <div style={{ minHeight: '100vh' }} className=' d-flex flex-column'>
                  <NavigateBar/>
                  <LoginForm/>
                  <Footer/>
                  
            </div>
      );
};

export default Login;