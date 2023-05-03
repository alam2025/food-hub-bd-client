import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const MainLayout = () => {
      return (
            <div style={{ minHeight: '100vh' }} className=' d-flex flex-column '>
                  <Header/>
                  <Outlet/>
                  <Footer/>
            </div>
      );
};

export default MainLayout;