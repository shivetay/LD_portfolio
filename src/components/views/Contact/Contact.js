import React from 'react';

import './Contact.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faDiceFive,
  faEnvelope,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className='Contact'>
      <div className='Contact__Container'>
        <span className='Contact-bg'>contact</span>
        <div className='Contact__Content'>
          <div className='Contact__Content-social'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/lukaszdawidowicz/'>
              <FontAwesomeIcon icon={faLinkedin} />
              linkedin
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/shivetay'>
              <FontAwesomeIcon icon={faGithub} />
              github
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.fiverr.com/shivetay?public_mode=true'>
              <FontAwesomeIcon icon={faDiceFive} />
              fiver
            </a>
          </div>
          <div className='Contact__Content-rest'>
            <span>
              dawidowicz.lukasz@hotmail.com
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://1drv.ms/b/s!AmWwIHoCT8_JkFtau5aJrAbGM-hi?e=ZTyWtL'>
              <FontAwesomeIcon icon={faFilePdf} />
              CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
