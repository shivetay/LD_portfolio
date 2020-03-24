import React from 'react';

import photo from '../../../Images/ld_photo.JPG';

import './About.scss';

const About = () => {
  return (
    <section className='About'>
      <div className='About__Container'>
        <span className='About-bg'>about</span>
        <div className='About__Content'>
          <img
            src={photo}
            alt='photo_lukasz_dawidowicz'
            className='About__Content-img'
          />
          {/* <p className='About__Content-description'> */}
          <span>
            <span className='About__Content-span'>
              I have 5 years experience in IT.{' '}
            </span>{' '}
            During this time, I was able to provide solid support for
            international clients and my work colleagues. My first approach to
            coding was over one year ago and it was not very succesful. That why
            I decided to go for full bootcamp experience. In June is stared my
            Web Devloper Plus bootcamp at Kodilla. After intesive 9 months with
            professional support provided by my mentor, I managed to get my
            first experience with{' '}
            <strong>
              JavaScript, HTML, CSS, React, Node.js, Express and MongoDB
            </strong>
            . Right now I am still polishing my new skills. My end goal is to
            become a solid Front end Developer that can be a valid part of any
            team.
          </span>
          <br />
          <span>
            <span className='About__Content-span'>
              During my 13 years of work experience,{' '}
            </span>{' '}
            I became aware of my strengths and limitations. This is why I am not
            taking anything for granted. Thanks to my hard work and full
            commitment for assigned tasks, I can easily fit my work style to any
            team that I will be working with. I am not afraid to take
            responsibilities for my actions. As a team player I am always trying
            to provide any help that I can for my team mates, as We are working
            in one team for common goal.
          </span>
          {/* </p> */}
        </div>
      </div>
    </section>
  );
};

export default About;
