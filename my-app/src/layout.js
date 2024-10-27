// Layout.js
import NavContent from './NavContent';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import React from 'react';

import './App.css';


function Layout() {
  return (
    <div className='App'>
      <NavContent />
      <main>
        <Outlet /> {/* This will render the routed component */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

