import React, { useState, useEffect } from 'react';
import { Route, useLocation, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SideBar from './components/SideBar/SideBar';
// import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
// import About from './components/About/About';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import ProjectView from './components/ProjectView/ProjectView';
// import Footer from './components/Footer/Footer';
import './styles/global.scss';
import Contact from './components/Contact/Contact';

function App() {
  const location = useLocation();
  const [isNavFull, setIsNavFull] = useState(false);
  // const [isLargeBreakpoint, setIsLargeBreakpoint] = useState(window.innerWidth > 768);
  // const [isLargeBreakpoint, setIsLargeBreakpoint] = useState(false);

  const toggleClass = () => {
    setIsNavFull(!isNavFull);
  };

  const toggleNavClose = () => {
    if (isNavFull) {
      setIsNavFull(isNavFull === false);
    }
  };

  // const handleResizeEvent = () => {
  //   const breakpoint = window.innerWidth > 768;
  //   if (breakpoint === isLargeBreakpoint) {
  //     setIsLargeBreakpoint(isLargeBreakpoint === true);
  //   } else if (breakpoint !== isLargeBreakpoint) {
  //     setIsLargeBreakpoint(isLargeBreakpoint === false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", handleResizeEvent)
  //     return () => {
  //       window.removeEventListener("resize", handleResizeEvent);
  //     }
  //   }, [isLargeBreakpoint]);
  useEffect(() => {
    // Include the Crisp code here, without the <script></script> tags
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = process.env.REACT_APP_CRISP_WEBSITE_ID;

    (function () {
      var d = document;
      var s = d.createElement('script');

      s.src = 'https://client.crisp.chat/l.js';
      s.async = 1;
      d.getElementsByTagName('head')[0].appendChild(s);
    })();
  }, []);

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
        <Routes>
          <Route path="/" element={<Navigate replace to="/resume" />} />
          <Route
            path="/projects"
            element={
              <>
                <SideBar />
                <Projects />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <SideBar />
                <Home />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <SideBar />
                <Contact />
              </>
            }
          />
          <Route
            path="/resume"
            element={
              <>
                <SideBar />
                <Resume />
              </>
            }
          />
          <Route path="/:portId" element={<ProjectView />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
