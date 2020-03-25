import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

class Navigation extends Component {
  state = {
    navItems: [
      {
        id: 1,
        name: 'Home',
        to: '/',
        clasName: 'Header__Nav-link',
      },
      {
        id: 2,
        name: 'About Me',
        to: '/about',
        clasName: 'Header__Nav-link',
      },
      {
        id: 3,
        name: 'Projects',
        to: '/projects',
        clasName: 'Header__Nav-link',
      },
      {
        id: 4,
        name: 'Skills',
        to: '/skills',
        clasName: 'Header__Nav-link',
      },
      {
        id: 5,
        name: 'Contact',
        to: '/contact',
        clasName: 'Header__Nav-link',
      },
    ],
    activeLink: null,
  };

  clickItem = path => {
    this.setState({ activeLink: path });
  };
  render() {
    const { navItems, activeLink } = this.state;
    return (
      <nav>
        <div className='Header__Nav'>
          {navItems.map(item => {
            return (
              <NavLink key={item.id} className='link' to={item.to}>
                <span
                  onClick={() => this.clickItem(item.to)}
                  className={
                    item.clasName +
                    ' ' +
                    (item.to === activeLink ? 'active-link' : '')
                  }>
                  {item.name}
                </span>
              </NavLink>
            );
          })}
          {/* <NavLink className='link' to='/'>
            <span className='Header__Nav-link active-link'>Home</span>
          </NavLink>
          <NavLink className='link' to='/about'>
            <span className='Header__Nav-link'>About Me</span>
          </NavLink>
          <NavLink className='link' to='/projects'>
            <span className='Header__Nav-link'>Projects</span>
          </NavLink>
          <NavLink className='link' to='/skills'>
            <span className='Header__Nav-link'>Skills</span>
          </NavLink>
          <NavLink className='link' to='/contact'>
            <span className='Header__Nav-link'>Contact</span>
          </NavLink> */}
        </div>
      </nav>
    );
  }
}

export default Navigation;
