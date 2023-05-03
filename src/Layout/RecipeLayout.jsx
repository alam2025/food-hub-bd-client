import React from 'react';
import NavigateBar from '../Pages/Shared/Header/NavigateBar';
import Footer from '../Pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import ChefProfileBanner from '../Pages/Shared/Header/ChefProfileBanner';
const RecipeLayout = () => {
      
      return (
            <div style={{ minHeight: '100vh' }} className=' d-flex flex-column'>
                  <NavigateBar />
                  
                  <ChefProfileBanner/>
                  <Outlet />
                  

                  <Footer />
            </div>
      );
};

export default RecipeLayout;