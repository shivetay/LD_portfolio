import React from 'react';

import './Skills.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faHtml5,
  faCss3,
  faSass,
  faReact,
  faNodeJs,
  faGithub,
  faNpm,
  faYarn,
  faJira,
  faConfluence,
  faBootstrap,
  faWindows,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faRunning } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <section className='Skills '>
      <div className='Skills__Container'>
        <span className='Skills-bg'>skills</span>
        <div className='Skills__Content grid'>
          <div className='Skills__Content-front'>
            <h3>Front-End</h3>
          </div>
          <div className='Skills__Content-icon1 flex '>
            <FontAwesomeIcon className='Skills-icon' icon={faHtml5} />
            <span className='Skills-span'>HTML</span>
          </div>
          <div className='Skills__Content-icon2  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faCss3} />
            <span className='Skills-span'>CSS</span>
          </div>
          <div className='Skills__Content-icon3  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faSass} />
            <span className='Skills-span'>SASS</span>
          </div>
          <div className='Skills__Content-icon4  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faJsSquare} />
            <span className='Skills-span'>JavaScript</span>
          </div>
          <div className='Skills__Content-icon5  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faReact} />
            <span className='Skills-span'>React + Redux</span>
          </div>
          <div className='Skills__Content-icon6  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faBootstrap} />
            <span className='Skills-span'>Bootstrap</span>
          </div>

          <div className='Skills__Content-back'>
            <h3>Back-End</h3>
          </div>
          <div className='Skills__Content-icon7  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faNodeJs} />
            <span className='Skills-span'>Node.js + Express</span>
          </div>
          <div className='Skills__Content-icon8  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faDatabase} />
            <span className='Skills-span'>MongoDB</span>
          </div>
          <div className='Skills__Content-other'>
            <h3>other</h3>
          </div>
          <div className='Skills__Content-icon9  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faNpm} />
            <span className='Skills-span'>NPM</span>
          </div>
          <div className='Skills__Content-icon10  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faYarn} />
            <span className='Skills-span'>Yarn</span>
          </div>
          <div className='Skills__Content-icon11  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faRunning} />
            <span className='Skills-span'>SCRUM</span>
          </div>
          <div className='Skills__Content-icon12  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faGithub} />
            <span className='Skills-span'>Git</span>
          </div>
          <div className='Skills__Content-icon13  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faJira} />
            <span className='Skills-span'>Jira</span>
          </div>
          <div className='Skills__Content-icon14  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faConfluence} />
            <span className='Skills-span'>Confluence</span>
          </div>
          <div className='Skills__Content-icon15  flex'>
            <FontAwesomeIcon className='Skills-icon' icon={faWindows} />
            <span className='Skills-span'>Windows</span>
          </div>
          {/* <div className='Skills__Content-learn'>
            <h3>Learning</h3>
          </div>
          <p className='Skills__Content-text'>
            Right now I am polishing my skills. Working hard with Front-End and
            Back-End .
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
