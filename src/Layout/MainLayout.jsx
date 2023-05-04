import React, { createContext } from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

export const RecipeContext = createContext(null)
const MainLayout = () => {
      const recipes = useLoaderData();
      
      return (
            <RecipeContext.Provider value={recipes}>
                  <div style={{ minHeight: '100vh' }} className=' d-flex flex-column '>
                        <Header />
                        <Outlet />
                        <Footer />
                  </div>
            </RecipeContext.Provider>
      );
};

export default MainLayout;