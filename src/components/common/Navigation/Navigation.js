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
    activeLink: '/',
    pathName: null,
  };
  // componentDidMount() {
  //   const { checkPath } = this;
  //   const { navItems } = this.state;
  //   checkPath(navItems.to);
  // }
  // checkPath = toPath => {
  //   const pathLocation = window.location.pathname;
  //   if (toPath === pathLocation) {
  //     this.setState({ pathName: pathLocation });
  //   } else this.setState({ pathName: null });
  // };

  // clickItem = path => {
  //   this.setState({ activeLink: path });
  //   this.checkPath(path);
  // };

  render() {
    const { navItems } = this.state;
    // const { props } = this;
    return (
      <nav>
        <div className='Header__Nav'>
          {navItems.map(item => {
            return (
              <NavLink
                exact={true}
                key={item.id}
                className='link'
                activeClassName='active-link'
                to={item.to}>
                {item.name}
                {/* <span
                  className={
                    item.clasName
                    // onClick={() => this.clickItem(item.to)}
                    // className={
                    //   item.clasName +
                    //   ' ' +
                    //   (item.to === activeLink || item.to === pathName
                    //     ? 'active-link'
                    //     : '')
                    //   // item.clasName +
                    //   //   ' ' +
                    //   //   (item.to === pathName ? 'active-link' : '')
                  }>
                  {item.name}
                </span> */}
              </NavLink>
            );
          })}
        </div>
      </nav>
    );
  }
}

export default Navigation;
