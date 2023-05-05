import React, { useContext } from 'react';
import NavigateBar from '../Shared/Header/NavigateBar';
import Footer from '../Shared/Footer';
import { AuthContext } from '../../Provider/AuthProvider';
import UserDetails from './UserDetails';

const UserProfile = () => {
      const {user}= useContext(AuthContext);
      console.log(user);
      return (
            <div style={{ minHeight: '100vh' }} className=' d-flex flex-column '>
                  <NavigateBar />
                  <UserDetails/>
                  <Footer />

            </div>
      );
};

export default UserProfile;