import React, { useContext } from 'react';
import NavigateBar from '../Pages/Shared/Header/NavigateBar';
import Footer from '../Pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PopularRecipeLayput = () => {
      const {loading}= useContext(AuthContext)
      if(loading){
            return <div style={{height:'200px'}} className='d-flex justify-content-center align-items-center '>
                  <Spinner   animation="border" variant="info" />
            </div>
      }
      return (
            <div style={{ minHeight: '100vh' }} className=' d-flex flex-column'>
                  <NavigateBar/>
                  <Outlet/>
                  <Footer/>
            </div>
      );
};

export default PopularRecipeLayput;