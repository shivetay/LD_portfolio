import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div>
        <h3>Łukasz Dawidowicz</h3>
        <p>Front-End Developer</p>
      </div>
      <div>
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
