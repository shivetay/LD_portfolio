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
    <section className='Contact root'>
      <div className='Contact__Container'>
        <span className='Contact-bg'>contact</span>
        <div className='Contact__Content'>
          <div className='Contact__Content-social'>
            <div className='icon-group'>
              {' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/lukaszdawidowicz/'>
                linkedin
              </a>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className='icon-group'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/shivetay'>
                github
              </a>
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className='icon-group'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.fiverr.com/shivetay?public_mode=true'>
                fiver
              </a>
              <FontAwesomeIcon icon={faDiceFive} />
            </div>
          </div>
          <div className='Contact__Content-rest'>
            <span className='icon-group'>
              <a href='#'>dawidowicz_lukasz@hotmail.com</a>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <div className='icon-group'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://1drv.ms/b/s!AmWwIHoCT8_JkFtau5aJrAbGM-hi?e=ZTyWtL'>
                CV
              </a>
              <FontAwesomeIcon icon={faFilePdf} />
            </div>
          </div>
        </div>
      </div>
    </section>
    //
  );
};

export default Contact;
