
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ProjectView from './components/ProjectView/ProjectView';
import SideBar from './components/SideBar/SideBar';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to="/resume" />} />
    <Route
      path="/projects"
      element={(
        <>
          <SideBar />
          <Projects />
        </>
      )}
    />
    <Route
      path="/home"
      element={(
        <>
          <SideBar />
          <Home />
        </>
      )}
    />
    <Route
      path="/contact"
      element={(
        <>
          <SideBar />
          <Contact />
        </>
      )}
    />
    <Route
      path="/resume"
      element={(
        <>
          <SideBar />
          <Resume />
        </>
      )}
    />
    <Route path="/:portId" element={<ProjectView />} />
  </Routes>
);

export default AppRoutes;
