import React from 'react';
import NavigateBar from '../Pages/Shared/Header/NavigateBar';
import Footer from '../Pages/Shared/Footer';

const LoginLayout = ({children}) => {
      return (
            <div style={{ minHeight: '100vh' }} className=' d-flex flex-column '>
                  <NavigateBar/>
                  {children}
                  <Footer/>
            </div>
      );
};

export default LoginLayout;