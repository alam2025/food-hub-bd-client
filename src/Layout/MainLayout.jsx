import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const MainLayout = () => {
      return (
            <div className=' d-flex flex-column min-vh-100'>
                  <Header/>
                  <Outlet/>
                  <Footer/>
            </div>
      );
};

export default MainLayout;