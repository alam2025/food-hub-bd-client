import React from 'react';
import NavigateBar from '../Shared/Header/NavigateBar';
import Footer from '../Shared/Footer';
import RegistrationForm from './RegistrationForm';

const Register = () => {
      return (
            <div style={{ minHeight: '100vh' }} className=' d-flex flex-column'>
                 <NavigateBar/>
                 <RegistrationForm/>
                 <Footer/>
            </div>
      );
};

export default Register;