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
        <NavLink className='link' to='/'>
          <span className='Header__Nav-link active-link'>Home</span>
        </NavLink>
        <NavLink className='link' to='/projects'>
          <span className='Header__Nav-link'>Projects</span>
        </NavLink>
        <NavLink className='link' to='/skills'>
          <span className='Header__Nav-link'>Skills</span>
        </NavLink>
        <NavLink className='link' to='/about'>
          <span className='Header__Nav-link'>About Me</span>
        </NavLink>
        <NavLink className='link' to='/contact'>
          <span className='Header__Nav-link'>Contact</span>
        </NavLink>
      </div>
    </div>
  );
}
