
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import AppRoutes from '../../routes';

const Layout = () => {
  const location = useLocation();
  const [isNavFull, setIsNavFull] = useState(false);

  const toggleClass = () => {
    setIsNavFull(!isNavFull);
  };

  const toggleNavClose = () => {
    if (isNavFull) {
      setIsNavFull(false);
    }
  };

  const routeName = location.pathname.substring(1);
  const mainClassName = `${isNavFull ? 'blur' : ''} ${routeName}`.trim();

  return (
    <div className="App">
      <header id="#top" className="header-section">
        <div className="gradient-header"></div>
        <div className="wrapper">
          <Navigation
            setIsNavFull={setIsNavFull}
            isNavFull={isNavFull}
            toggleClass={toggleClass}
            toggleNavClose={toggleNavClose}
          />
        </div>
      </header>
      <main id="main" className={mainClassName}>
        <AppRoutes />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
