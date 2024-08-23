import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import './Layout.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Depuración
  console.log("Current pathname:", location.pathname);

  const showNavBar = !['/login'].includes(location.pathname);
  const showFooter = !['/login'].includes(location.pathname);

  return (
    <div className="layout">
      {showNavBar && <NavBar />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
