import React from 'react';
import NavigateBar from '../Pages/Shared/Header/NavigateBar';
import Footer from '../Pages/Shared/Footer';
import { Outlet } from 'react-router-dom';

const PopularRecipeLayput = () => {
      return (
            <div style={{ minHeight: '100vh' }} className=' d-flex flex-column'>
                  <NavigateBar/>
                  <Outlet/>
                  <Footer/>
            </div>
      );
};

export default PopularRecipeLayput;