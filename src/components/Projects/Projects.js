import React from 'react';
import Meta from '../Meta/Meta'; // Import the Meta component
import Project from '../Project/Project';
import './Projects.scss';
import { projectItems } from '../../utils/projectItems';

export default function Projects() {
  
  return (
    <section id="projects">
      <Meta title="Projects - Kazi Mamun" description="Explore the projects developed by Kazi Mamun." />
      <div className="wrapper">
        <div className="projects-container">
          <Project projects={projectItems}/>
        </div>
      </div>
  </section>
  )
}