import React from 'react';
import Banner from './Banner';
import NavigateBar from './NavigateBar';
import LazyLoad from 'react-lazy-load';

const Header = () => {
      return (
            <div className=' container'>
                  <NavigateBar />


                  <Banner />

            </div>
      );
};

export default Header;