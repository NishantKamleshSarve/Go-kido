import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header.jsx'; // Import Header
import Footer from './component/footer.jsx'; // Import Footer
import Background from './component/Background.jsx';

const Layout = () => {
  return (
    <>
      <Header /> {/* Header Component */}
     
      <Outlet />
      <Footer /> {/* Footer Component */}
    </>
  );
};

export default Layout;