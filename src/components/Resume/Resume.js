import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Resume.scss';

export default function Resume() {
  const navigate = useNavigate();

  return (
    <div className="resume-layout">
      <div className="resume-layout--summary">
        <h4 className="">Summary</h4>
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
      <br />
      <br />
      <h4 className="">Work experience</h4>
      <hr />
      <br />
      <div className="resume-layout--experience">
        <div className="resume-layout--experience-header">
          <div>
            <h3 className="">Sr. Software Engineer (Tech Lead)</h3>
            <h4 className="">Adventure Dhaka Limited · Full-time (On Site)</h4>
          </div>
          <div>
            <h2 className="">October 2024 - June 2025</h2>
          </div>
        </div>
        <br />
        <ul className="">
          <li>
            -Contributed to the development of the skyticket OTA platform, built on Laravel. http://skyticket.jp/hotel
          </li>
          <li>
            -Assisted in frontend and backend development working with other
            members of the team doing code reviews to help expedite development.
          </li>
          <li>
            Skills: Databases · Software Development · Laravel · React.js · Next.js · Full-Stack Development · Docker
          </li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <div className="resume-layout--experience">
        <div className="resume-layout--experience-header">
          <div>
            <h3 className="">Team Lead Software</h3>
            <h4 className="">Kj Commons Co. Ltd. · Full-time (Remote)</h4>
          </div>
          <div>
            <h2 className="">Dec 2022 - Sep 2024</h2>
          </div>
        </div>
        <br />
        <ul className="">
          <li>
            - Did team lead with project plan and following standard coding rules with quality product delivery through Unit Testing.
          </li>
          <li>
            - Worked within an agile scrum team, contributing to 100% continuous
            improvement and deployment (CICD)
          </li>
          <li>
            - https://www.thebeats.app/ This is social network app For
            API used CakePHP .. beside this I worked here on Three.js and for
            admin crm I used next js with materialize design pattern. also
            worked on OpenAI api and spotify api here. implemented realtime
            emotion sharing with threeJS and firebase.
          </li>
          <li>
            Skills: Databases · CakePHP · Laravel · Three.js · React.js · Next.js · Node.js · Full-Stack
            Development · Amazon S3 · Firebase · AWS Lambda · Amazon EC2 ·
            Front-End Development · Artificial Intelligence (AI) · JavaScript ·
            GraphQL · Express.js · Amazon Web Services (AWS) · TypeScript
          </li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <div className="resume-layout--experience">
        <div className="resume-layout--experience-header">
          <div>
            <h3 className="">Sr. Software Engineer</h3>
            <h4 className="">Oceanize Bangladesh · Full-time (On Site)</h4>
          </div>
          <div>
            <h2 className="">Aug 2017 - Dec 2022</h2>
          </div>
        </div>
        <br />
        <ul className="">
          <li>
            - https://fastnail.app/ For API used FuelPHP and for front and
              admin we used CakePHP . this is actually seat booking system for
              many salon. Under one system many salon shared their available
              design and seat. Hotpeper minimo api integrated here for booking
              system integration
          </li>
          <li>
            Skills: FuelPHP ·Laravel · CakePHP · Nuxt.js · Node.js · JavaScript ·
            GraphQL · Express.js
          </li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <div className="resume-layout--experience">
        <div className="resume-layout--experience-header">
          <div>
            <h3 className="">Web Application Developer</h3>
            <h4 className="">ABAC Technologies LTD · Full-time (On Site)</h4>
          </div>
          <div>
            <h2 className="">Jan 2015 - Aug 2017</h2>
          </div>
        </div>
        <br />
        <ul className="">
          <li>
            - Used many open sources, JavaScript libraries, MYSQL, web
              technologies, (which I mentioned in my IT skills) with newly
              developed complex modules/plugins/extensions.
          </li>
          <li>
            - Developed Doctor management system in codeignitor
          </li>
          
          <li>
            Skills: Wordpress, Magento, codeignitor, JavaScript · Figma (Software) · Adobe
            Photoshop · Cascading Style Sheets (CSS)
          </li>
        </ul>
      </div>
      <br />
      <hr />
    </div>
  );
}
