import React, { Component } from 'react';

import photo1 from '../../../Images/project_lp1.png';
import photo2 from '../../../Images/project_lp2.png';
import photo3 from '../../../Images/project_lp3.png';
import photo4 from '../../../Images/pogodynka.png';
import photo5 from '../../../Images/new_wave.png';
// import photo6 from '../../../Images/new_wave.png';
// import photo7 from '../../../Images/pizza_restaur.png';
import photo8 from '../../../Images/project_blog.png';
import photo9 from '../../../Images/pizza_restaur.png';
import photo10 from '../../../Images/group_pr.png';
import photo11 from '../../../Images/dashboard.png';
import photo12 from '../../../Images/tod_react.png';

class Project extends Component {
  state = {
    proj: [
      {
        id: 1,
        name: 'Landing page',
        link: 'https://shivetay.github.io/protfolio_project_1',
        git: 'https://github.com/shivetay/protfolio_project_1',
        tech: 'HTML, CSS/SASS, CSS Grid, RWD',
        description:
          'Small ladnign page, created with some basic HTML, CSS and RWD. Gallery was made with CSS. Grid',
        photo: photo1,
      },
      {
        id: 2,
        name: 'Landing page',
        link: 'https://shivetay.github.io/portfolio_project_2/',
        git: 'https://github.com/shivetay/portfolio_project_2',
        tech: 'HTML, CSS/SASS, flexbox, RWD',
        description:
          'Small ladnign page, created with some basic HTML and CSS. Thispage is fully responisve.',
        photo: photo2,
      },
      {
        id: 3,
        name: 'Landing page',
        link: 'https://shivetay.github.io/portfolio_project_3/',
        git: 'https://github.com/shivetay/portfolio_project_3',
        tech: 'HTML, CSS/SASS, Bootstrap, RWD',
        description:
          'Small ladnign page, created with Bootstrap. This page is fully responisve.',
        photo: photo3,
      },
      {
        id: 4,
        name: 'Vanila Js Weather App',
        link: 'https://shivetay.github.io/vanila_js_wheaterApp/',
        git: 'https://github.com/shivetay/vanila_js_wheaterApp',
        tech: 'HTML, CSS/SASS, JS, API',
        description:
          ' Small weather app. This page was created as a prctice with Vanila JavaScript. Weather is generet from openweatherAPI.',
        photo: photo4,
      },
      {
        id: 5,
        name: 'New Wave Festival',
        link: 'https://damp-gorge-76852.herokuapp.com/',
        git: 'https://github.com/shivetay/kodilla_express_tickets',
        tech: 'HTML, CSS/SASS, React + Redux, Mongo, Websocket, express',
        description:
          'This page was created as a backed-end practice, during my Kodilla bootcamp. Main goal was to use mongo as a database.',
        photo: photo5,
      },
      // {
      //   id: 6,
      //   name: 'Travle agency',
      //   link: '',
      //   tech: 'HTML, CSS/SASS, React + Redux',
      //   description:
      //     'This page was created as a React practice, during my Kodilla bootcamp. Main goal was to use fix all bugs. Also this page was done with TDD. To run this project use: yarn start',
      //   photo: '',
      // },
      // {
      //   id: 7,
      //   name: 'Pizza Portal',
      //   link: '',
      //   tech: 'HTML, CSS/SASS, React + Redux',
      //   description:
      //     'This page was created as a React practice, during my Kodilla bootcamp. Main goal was to connect fronte-end with back-end.  To run this project use: yarn start. localhost:3131 - client side, localhost:3131/api - api, localhost:3131/panel - main home site',
      //   photo: '',
      // },
      {
        id: 8,
        name: 'JavaScript Blog',
        link: 'https://shivetay.github.io/kodill_blog/',
        git: 'https://github.com/shivetay/kodill_blog',
        tech: 'HTML, CSS/SASS, JS',
        description:
          'This page was created as a Javascript practice, during my Kodilla bootcamp.',
        photo: photo8,
      },
      {
        id: 9,
        name: 'JavaScript Pizza restaurant',
        link: 'https://pizza-kodilla-54318.herokuapp.com/',
        git: 'https://github.com/shivetay/kodilla_pizza',
        tech: 'HTML, CSS/SASS, JS',
        description:
          'This page was created as a OOP Javascript practice, during my Kodilla bootcamp.',
        photo: photo9,
      },
      {
        id: 10,
        name: 'Online furniture shop',
        link: 'https://stupefied-lewin-977cb1.netlify.com/',
        git: 'https://github.com/Neonides/kodilla-wdp-1912-01',
        tech: 'HTML, CSS/SASS, React + Redux',
        description:
          'This page was created as a group project, during my Kodilla bootcamp. Main goal here was, to deliver working site for customer.',
        photo: photo10,
      },
      {
        id: 11,
        name: 'JS Dashboard',
        link: 'https://shivetay.github.io/kodilla_dashbord/',
        git: 'https://github.com/shivetay/kodilla_dashbord',
        tech: 'HTML, CSS/SASS, JS',
        description:
          'This page was created as a singel project, during my Kodilla bootcamp. Main goal here was, to from PSD to working website',
        photo: photo11,
      },
      {
        id: 12,
        name: 'ToDo React App',
        link: 'https://todo-kodilla.herokuapp.com/',
        git: 'https://github.com/shivetay/kodilla_to_do_react',
        tech: 'HTML, CSS/SASS, React + Redux',
        description:
          'This page was created as a React practice, during my Kodilla bootcamp.',
        photo: photo12,
      },
    ],
  };
  render() {
    const { proj } = this.state;
    return (
      <div className='Projects__Content'>
        {proj.map(project => (
          <div className='Projects__Project' key={project.id}>
            <h3 className='Projects-name'>{project.name}</h3>
            <img
              className='Projects-photo'
              src={project.photo}
              alt='project_img'
            />
            <span className='Projects-tech'>{project.tech}</span>
            <p className='Projects-descr'>{project.description}</p>
            <div className='Project-button'>
              <button className='btn'>
                <a className='btn-aTag' href={project.link}>
                  Demo
                </a>
              </button>
              <button className='btn'>
                <a className='btn-aTag' href={project.git}>
                  Code
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Project;
