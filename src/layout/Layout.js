import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const Layout = () => {
  return (
    <div>
        <Nav />
        <Outlet />
      {/* Footer would go here  */}
    </div>
  );
};

export default Layout;
