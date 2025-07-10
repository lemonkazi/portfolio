import React from 'react';
import moment from 'moment-timezone';
import logoImg from '../../assets/lemonkazi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

import './SideBar.scss';

const SideBar = () => {
  return (
    <aside>
      <div className="aside">
        <div className="aside-logo">
          <div>
            <img src={logoImg} alt="ttf-logo" />
          </div>
          <div className="name-time">
            <h4>Kazi Abdullah Al Mamun</h4>
            <span style={{ marginBottom: '10px', fontSize: '20px' }}>
              $15.00/hr
            </span>
            <span>
              Dhaka, Bangladesh -{' '}
              {moment().tz('Astana/Dhaka').format('h:mm a')}
            </span>
            {/* <span style={{ color: '#f3ff9b' }}>
              I'm available in the Bangladesh time zone (UTC+6).
            </span> */}
            {/* ✅ New: Social & Certifications */}
            <div style={{ marginTop: '10px' }}>
              {/* Social icons side by side */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <a
                  href="https://www.linkedin.com/in/lemonkazi-fullstack-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>

                <a
                  href="https://github.com/lemonkazi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>

              {/* Certifications in a separate line */}
              <div>
                <FontAwesomeIcon icon={faCertificate} style={{ marginRight: '8px' }} />
                <span>Certifications: Certified Scrum Master (CSM)</span>
              </div>
            </div>

          </div>
        </div>
        <div className="aside-summary">
          <div className="hours-per-week">
            <h5 className="aside__h1">Hours per week</h5>
            <span>More than 40 hrs/week</span>
          </div>
          <div className="languages">
            <h5 className="aside__h1">Languages</h5>
            <span>English: Fluent</span>
          </div>
          <div className="education">
            <h5 className="aside__h1">Education</h5>
            <span>Patuakhali Science And Technology University</span>
          </div>
          <div className="front-end">
            <h5 className="aside__h1">Front-end Development</h5>
            <span>✔ React.JS, Next.js, Three.js, Express.js, Nuxt.js</span>
            <span>
              ✔ Material UI, TailwindCSS, Bootstrap
            </span>
            <span>✔ Styled-components</span>
            <span>
              ✔ Redux
            </span>
            <span>✔ Axios</span>
            <span>✔ React Context API</span>
            <span>✔ Heroku, Digital Ocean</span>
            <span>✔ HTML5, CSS3(SCSS/SASS/LESS)</span>
            <span>✔ Pure JavaScript, TypeScript</span>
          </div>
          <div className="back-end">
            <h5 className="aside__h1">Back-end Development</h5>
            <span>✔ Laravel, CakePHP, FuelPHP, Wordpress, Node.js, Express.js</span>
            <span>✔ NGINX, MySQL</span>
            <span>✔ Firebase, AWS, Heroku</span>
          </div>
          <div className="project-manage">
            <h5 className="aside__h1">Project Management Methodology</h5>
            <span>✔ Agile/Scrum</span>
          </div>
          <div className="source-control">
            <h5 className="aside__h1">Source Control</h5>
            <span>✔ GitHub, GitLab, Bitbucket</span>
          </div>
          <div className="task-manage">
            <h5 className="aside__h1">Task Managemet</h5>
            <span>✔ Jira, Trello, Asana</span>
          </div>
        </div>
        <div className="aside-copyright">
          <span>2025 © Kazi Mamun. All rights reserved.</span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
