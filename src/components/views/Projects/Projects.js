import React from 'react';

import './Projects.scss';

import Project from '../Project/Project';

const Projects = () => {
  return (
    <section className='Projects'>
      <div className='Projects__Container'>
        <Project />
      </div>
    </section>
  );
};

export default Projects;
