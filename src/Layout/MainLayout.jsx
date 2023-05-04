import React, { createContext, useContext } from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';

export const RecipeContext = createContext(null)
const MainLayout = () => {
      const { loading } = useContext(AuthContext)
      if (loading) {
            return <div style={{ height: '200px' }} className='d-flex justify-content-center align-items-center '>
                  <Spinner animation="border" variant="primary" />
                  <Spinner animation="border" variant="secondary" />
                  <Spinner animation="border" variant="success" />
                  <Spinner animation="border" variant="danger" />
            </div>
      }
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