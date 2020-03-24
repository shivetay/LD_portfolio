import React from 'react';

import './Projects.scss';

class Projects extends React.Component {
  state = {
    proj: [
      {
        id: 1,
        name: 'Landing page One',
        link: 'https://shivetay.github.io/protfolio_project_1',
        tech: 'HTML, CSS/SASS, CSS Grid, RWD',
        description:
          'Small ladnign page, created with some basic HTML and CSS. This page is fully responisve. Gallery was made with CSS Grid',
        photo: '../../layout/Images/project_lp1.png',
      },
      {
        id: 2,
        name: 'Landing page Two',
        link: 'https://shivetay.github.io/portfolio_project_2/',
        tech: 'HTML, CSS/SASS, flexbox, RWD',
        description:
          'Small ladnign page, created with some basic HTML and CSS. This page is fully responisve.',
        photo: '../../layout/Images/project_lp2.png',
      },
      {
        id: 3,
        name: 'Landing page Three',
        link: 'https://shivetay.github.io/portfolio_project_3/',
        tech: 'HTML, CSS/SASS, Bootstrap, RWD',
        description:
          'Small ladnign page, created with Bootstrap. This page is fully responisve.',
        photo: '../Images/project_lp3.png',
      },
      {
        id: 4,
        name: 'Vanila Js Weather App',
        link: 'https://shivetay.github.io/vanila_js_wheaterApp/',
        tech: 'HTML, CSS/SASS, JS, API',
        description:
          'Small weather app. This page was created as a prctice with Vanila JavaScript. Weather is generet from openweatherAPI',
        photo: '',
      },
      {
        id: 5,
        name: 'New Wave Festival',
        link: 'https://damp-gorge-76852.herokuapp.com/',
        tech: 'HTML, CSS/SASS, React + Redux, Mongo, Websocket, express',
        description:
          'This page was created as a backed-end practice, during my Kodilla bootcamp. Main goal was to use mongo as a database.',
        photo: '',
      },
      {
        id: 6,
        name: 'Travle agency',
        link: '',
        tech: 'HTML, CSS/SASS, React + Redux',
        description:
          'This page was created as a React practice, during my Kodilla bootcamp. Main goal was to use fix all bugs. Also this page was done with TDD. To run this project use: yarn start',
        photo: '',
      },
      {
        id: 7,
        name: 'Pizza Portal',
        link: '',
        tech: 'HTML, CSS/SASS, React + Redux',
        description:
          'This page was created as a React practice, during my Kodilla bootcamp. Main goal was to connect fronte-end with back-end.  To run this project use: yarn start. localhost:3131 - client side, localhost:3131/api - api, localhost:3131/panel - main home site',
        photo: '',
      },
      {
        id: 8,
        name: 'JavaScript Blog',
        link: 'https://shivetay.github.io/kodill_blog/',
        tech: 'HTML, CSS/SASS, JS',
        description:
          'This page was created as a Javascript practice, during my Kodilla bootcamp.',
        photo: '',
      },
      {
        id: 9,
        name: 'JavaScript Pizza restaurant',
        link: 'https://pizza-kodilla-54318.herokuapp.com/',
        tech: 'HTML, CSS/SASS, JS',
        description:
          'This page was created as a OOP Javascript practice, during my Kodilla bootcamp.',
        photo: '',
      },
      {
        id: 10,
        name: 'Online furniture shop',
        link: 'https://stupefied-lewin-977cb1.netlify.com/',
        tech: 'HTML, CSS/SASS, React + Redux',
        description:
          'This page was created as a group project, during my Kodilla bootcamp. Main goal here was, to deliver working site for customer',
        photo: '',
      },
      {
        id: 11,
        name: 'JS Dashboard',
        link: 'https://shivetay.github.io/kodilla_dashbord/',
        tech: 'HTML, CSS/SASS, JS',
        description:
          'This page was created as a singel project, during my Kodilla bootcamp. Main goal here was, to cut PSD to working website',
        photo: '',
      },
      {
        id: 12,
        name: 'ToDo React App',
        link: 'https://todo-kodilla.herokuapp.com/',
        tech: 'HTML, CSS/SASS, React + Redux',
        description:
          'This page was created as a React practice, during my Kodilla bootcamp.',
        photo: '../../../Images/tod_react.png',
      },
    ],
  };

  render() {
    return (
      <section className='Projects'>
        <div className='Projects__Container'>
          <span className='Projects-bg'>projects</span>
          <div className='Projects__Content'>
            <div className='Projects__Project'>
              <h3>{project.name}</h3>
              <img src={project.photo} alt='project_img' />
              <span className='Projects-tech'>{project.tech}</span>
              <p className='Projects-descr'>{descr}</p>
              <a href='link'>Demo</a>
              <a href='git'>Code</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
