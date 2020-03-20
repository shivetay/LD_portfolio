import React from 'react';

import './Skills.scss';

const Skills = () => {
  return (
    <section className='Skills'>
      <div className='Skills__Container'>
        <span className='Skills-bg'>skills</span>
        <div className='Skills__Content grid'>
          <div className='Skills__Content-front'>Front-End</div>
          <div className='Skills__Content-back'>Back-End</div>
          <div className='Skills__Content-other'>other</div>
          <div className='Skills__Content-learn'>Learning</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
