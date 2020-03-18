import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export default function Header() {
  return (
    <div className='Header'>
      <div className='Header__Logo'>
        <h3 className='Header__Logo-h3'>Łukasz Dawidowicz</h3>
        <p className='Header__Logo-paragraph'>Front-End Developer</p>
      </div>
      <div className='Header__Nav'>
        <NavLink to='/'>
          <span>Home</span>
        </NavLink>
        <NavLink to='/projects'>
          <span>Projects</span>
        </NavLink>
        <NavLink to='/skills'>
          <span>Skills</span>
        </NavLink>
        <NavLink to='/about'>
          <span>About Me</span>
        </NavLink>
        <NavLink to='/contact'>
          <span>Contact</span>
        </NavLink>
      </div>
    </div>
  );
}
