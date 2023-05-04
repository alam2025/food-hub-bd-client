import React from 'react';
import NavigateBar from '../Shared/Header/NavigateBar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';
import BlogDetails from './BlogDetails';

const Blog = () => {
      return (
            <div style={{ minHeight: '100vh' }} className=' d-flex flex-column '>
                  <NavigateBar/>
                  <BlogDetails/>
                  <Footer/>
            </div>
      );
};

export default Blog;