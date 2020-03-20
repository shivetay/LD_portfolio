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
    <section className='Skills'>
      <div className='Skills__Container'>
        <span className='Skills-bg'>skills</span>
        <div className='Skills__Content grid'>
          <div className='Skills__Content-front'>
            <h3>Front-End</h3>
            <div>
              <FontAwesomeIcon icon={faHtml5} />
              <span className='Skills-span'>HTML</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCss3} />
              <span className='Skills-span'>CSS</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faSass} />
              <span className='Skills-span'>SASS</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faJsSquare} />
              <span className='Skills-span'>JavaScript</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faReact} />
              <span className='Skills-span'>React + Redux</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBootstrap} />
              <span className='Skills-span'>Bootstrap</span>
            </div>
          </div>
          <div className='Skills__Content-back'>
            <h3>Back-End</h3>
            <div>
              <FontAwesomeIcon icon={faNodeJs} />
              <span className='Skills-span'>Node.js - Express</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faDatabase} />
              <span className='Skills-span'>MongoDB</span>
            </div>
          </div>
          <div className='Skills__Content-other'>
            <h3>other</h3>
            <div>
              <FontAwesomeIcon icon={faNpm} />
              <span className='Skills-span'>NPM</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faYarn} />
              <span className='Skills-span'>Yarn</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faRunning} />
              <span className='Skills-span'>SCRUM</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span className='Skills-span'>Git</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faJira} />
              <span className='Skills-span'>Jira</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faConfluence} />
              <span className='Skills-span'>Confluence</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faWindows} />
              <span className='Skills-span'>Windows</span>
            </div>
          </div>
          <div className='Skills__Content-learn'>
            <h3>Learning</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
