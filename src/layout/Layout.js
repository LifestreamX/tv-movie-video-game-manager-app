import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import '../App.css';

const Layout = () => {
  return (
    <div>
      <Nav />
      <div className='layout-wrapper'>
        <div class='light x1'></div>
        <div class='light x2'></div>
        <div class='light x3'></div>
        <div class='light x4'></div>
        <div class='light x5'></div>
        <div class='light x6'></div>
        <div class='light x7'></div>
        <div class='light x8'></div>
        <div class='light x9'></div> <Outlet />
      </div>

      {/* Footer would go here  */}
    </div>
  );
};

export default Layout;
