import React from 'react';
import Banner from './Banner';
import NavigateBar from './NavigateBar';

const Header = () => {
      return (
            <div className=' container'>
                  <NavigateBar/>
                  <Banner/>
            </div>
      );
};

export default Header;