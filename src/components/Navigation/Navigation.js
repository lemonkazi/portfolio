import React from 'react';
import Logo from '../Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Navigation.scss';

const navigationItems = [
  {
    id: 3,
    url: 'https://calendly.com/lemonkazi/30min',
    label: 'Schedule Time',
  },
  // {
  //   id: 2,
  //   url: '/contact',
  //   label: 'Contact',
  // },
  { id: 0, url: '/resume', label: 'Resume' },
  { id: 1, url: '/projects', label: 'Projects' },
];

export default function Navigation({
  isNavFull,
  setIsNavFull,
  toggleClass,
  toggleNavClose,
}) {
  const navigate = useNavigate();

  return (
    <div className="Navigation">
      <nav id="navbar" className="navbar">
        <Logo toggleNavClose={toggleNavClose} />
        <button id="hamburger-icon" onClick={() => setIsNavFull(!isNavFull)}>
          <FontAwesomeIcon
            icon={faBars}
            aria-hidden="true"
            className="hamburger-icon"
          />
        </button>
        <div>
          <ul
            className={
              'navMenu ' + (isNavFull ? 'navShowing' : 'navNotShowing')
            }
          >
            {navigationItems.map((navItem, index) =>
              index !== 0 ? (
                <li
                  key={index}
                  onClick={() => {
                    navigate(`${navItem.url}`);
                  }}
                >
                  {navItem.label}
                </li>
              ) : (
                <li>
                  <a
                    href="https://calendly.com/lemonkazi/30min"
                    target="_blank"
                    className="schedule-time"
                  >
                    Schedule Time
                  </a>
                </li>
                
              )
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
