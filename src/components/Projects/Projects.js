import React from 'react';
import Project from '../Project/Project';
import './Projects.scss';
import { projectItems } from '../../utils/projectItems';

export default function Projects() {
  
  return (
    <section id="projects">
      <div className="wrapper">
        <div className="projects-container">
          <Project projects={projectItems}/>
        </div>
      </div>
  </section>
  )
}