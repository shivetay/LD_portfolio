import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='Home__Header'>
          <span className='Home__Header-bg '>hello</span>
          <section className='Home__Section'>
            <div className='Home__Section-content'>
              <p className='Home__Section-paragraph'>My name is Łukasz</p>
              <h2>
                <strong>I am a Front-End Developer</strong>
              </h2>
            </div>
            <div>
              <button className='btn'>
                <Link to='/projects'>
                  <span className='btn-span'>projects</span>
                </Link>
              </button>
              <button className='btn'>
                <Link to='/skills'>
                  <span className='btn-span'>skills</span>
                </Link>
              </button>
              <button className='btn'>
                <Link to='/about'>
                  <span className='btn-span'>about me</span>
                </Link>
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
