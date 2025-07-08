import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Meta from '../Meta/Meta'; // Import the Meta component
import './Contact.scss';

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact-layout">
      <Meta title="Contact - Kazi Mamun" description="Contact Kazi Mamun for any inquiries or opportunities." />
      <div className="contact-layout--summary">
        <h4 className="">Contact</h4>
        <hr />
        <span className=""></span>
        <br />
        <ul className="">
          As a software developer, my journey in the world of web development
          began with a curiosity for building interactive and seamless digital
          experiences. Over the years including during university, I have honed
          my skills in both frontend and backend technologies to deliver robust
          and user-friendly applications. I have experience in analysis design development 
          and testing maintainance of full lifecycle of development.
        </ul>
        <br />
        <ul className="">
          I'm a reliable and confident Full-Stack Web Developer. I have overall
          9+ years of professional experience in building multi functional web
          applications.
        </ul>
        <br />
        <ul>I help founders when:</ul>
        <ul>
          🔸 A client has an idea and wants to create the first MVP in a short
          period of time to show it to investors and get the investment round.
        </ul>
        <ul>
          🔸 A client has already had a UX/UI design or wireframe and wants to
          create a project based on these wireframes.
        </ul>
        <ul>
          🔸 A client wants to hire an experienced development team that has
          developed similar projects in the past
        </ul>
        <br />
        <ul>To make sure I achieve client business goals:</ul>
        <br />
        <ul>1. Review your existing situation and discuss your idea.</ul>
        <ul>2. Suggest the stack based on my experience.</ul>
        <ul>3. Estimate the cost of development & time of delivery.</ul>
        <ul>4. Plan resources and hire necessary developers (if needed).</ul>
        <ul>
          5. Manage the project, staff, and recourses to develop the project.
        </ul>
        <ul>
          6. Ongoing improvement to the solution and technical support.
        </ul>
      </div>
    </div>
  );
}
