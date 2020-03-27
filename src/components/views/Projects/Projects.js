import React from 'react';

import './Projects.scss';

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

class Projects extends React.Component {
  state = {
    proj: [],
  };

  render() {
    return (
      <section className='Projects'>
        <div className='Projects__Container'>
          <span className='Projects-bg'>projects</span>
          <div className='Projects__Content'>
            <div className='Projects__Project'>
              <h3 className='Projects-name'>Landing page</h3>
              <img className='Projects-photo' src={photo1} alt='project_img' />
              <span className='Projects-tech'>
                HTML, CSS/SASS, CSS Grid, RWD
              </span>
              <p className='Projects-descr'>
                Small ladnign page, created with some basic HTML and CSS. This
                page is fully responisve. Gallery was made with CSS Grid
              </p>
              <div className='Project-button'>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://shivetay.github.io/protfolio_project_1'>
                    Demo
                  </a>
                </button>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://github.com/shivetay/protfolio_project_1'>
                    Code
                  </a>
                </button>
              </div>
            </div>
            <div className='Projects__Project'>
              <h3 className='Projects-name'>Landing page</h3>
              <img className='Projects-photo' src={photo2} alt='project_img' />
              <span className='Projects-tech'>
                HTML, CSS/SASS, flexbox, RWD
              </span>
              <p className='Projects-descr'>
                Small ladnign page, created with some basic HTML and CSS. This
                page is fully responisve.
              </p>
              <div className='Project-button'>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://shivetay.github.io/protfolio_project_2'>
                    Demo
                  </a>
                </button>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://github.com/shivetay/portfolio_project_2'>
                    Code
                  </a>
                </button>
              </div>
            </div>
            <div className='Projects__Project'>
              <h3 className='Projects-name'>Landing page</h3>
              <img className='Projects-photo' src={photo3} alt='project_img' />
              <span className='Projects-tech'>
                HTML, CSS/SASS, Bootstrap, RWD
              </span>
              <p className='Projects-descr'>
                Small ladnign page, created with Bootstrap. This page is fully
                responisve.
              </p>
              <div className='Project-button'>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://shivetay.github.io/protfolio_project_3'>
                    Demo
                  </a>
                </button>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://github.com/shivetay/portfolio_project_3'>
                    Code
                  </a>
                </button>
              </div>
            </div>
            <div className='Projects__Project'>
              <h3 className='Projects-name'>Vanila Js Weather App</h3>
              <img className='Projects-photo' src={photo4} alt='project_img' />
              <span className='Projects-tech'>HTML, CSS/SASS, JS, API</span>
              <p className='Projects-descr'>
                Small weather app. This page was created as a prctice with
                Vanila JavaScript. Weather is generet from openweatherAPI.
              </p>
              <div className='Project-button'>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://shivetay.github.io/vanila_js_wheaterApp/'>
                    Demo
                  </a>
                </button>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://github.com/shivetay/vanila_js_wheaterApp'>
                    Code
                  </a>
                </button>
              </div>
            </div>
            <div className='Projects__Project'>
              <h3 className='Projects-name'>New Wave Festival</h3>
              <img className='Projects-photo' src={photo5} alt='project_img' />
              <span className='Projects-tech'>
                HTML, CSS/SASS, React + Redux, Mongo, Websocket, express
              </span>
              <p className='Projects-descr'>
                This page was created as a backed-end practice, during my
                Kodilla bootcamp. Main goal was to use mongo as a database.
              </p>
              <div className='Project-button'>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://damp-gorge-76852.herokuapp.com/'>
                    Demo
                  </a>
                </button>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://github.com/shivetay/kodilla_express_tickets'>
                    Code
                  </a>
                </button>
              </div>
            </div>
            {/* <div className='Projects__Project'>
              <h3 className='Projects-name'>Travle agency</h3>
              <img className='Projects-photo' src={photo6} alt='project_img' />
              <span className='Projects-tech'>
                HTML, CSS/SASS, React + Redux
              </span>
              <p className='Projects-descr'>
                This page was created as a React practice, during my Kodilla
                bootcamp. Main goal was to fix all bugs. Also this page was done
                with TDD. To run this project use: yarn start.
              </p>
              <div className='Project-button'>
                <button>
                  <a href='git'>Code</a>
                </button>
              </div>
            </div> */}
            {/* <div className='Projects__Project'>
              <h3 className='Projects-name'>Pizza Portal</h3>
              <img className='Projects-photo' src={photo7} alt='project_img' />
              <span className='Projects-tech'>
                HTML, CSS/SASS, React + Redux, API
              </span>
              <p className='Projects-descr'>
                This page was created as a React practice, during my Kodilla
                bootcamp. Main goal was to connect fronte-end with back-end. To
                run this project use: yarn start. localhost:3131 - client side,
                localhost:3131/api - api, localhost:3131/panel - main home site.
              </p>
              <div className='Project-button'>
                <button>
                  <a href='git'>Code</a>
                </button>
              </div>
            </div> */}
            <div className='Projects__Project'>
              <h3 className='Projects-name'>JavaScript Blog</h3>
              <img className='Projects-photo' src={photo8} alt='project_img' />
              <span className='Projects-tech'>HTML, CSS/SASS, JS</span>
              <p className='Projects-descr'>
                This page was created as a Javascript practice, during my
                Kodilla bootcamp.
              </p>
              <div className='Project-button'>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://shivetay.github.io/kodill_blog/'>
                    Demo
                  </a>
                </button>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://github.com/shivetay/kodill_blog'>
                    Code
                  </a>
                </button>
              </div>
            </div>
            <div className='Projects__Project'>
              <h3 className='Projects-name'>JavaScript Pizza restaurant</h3>
              <img className='Projects-photo' src={photo9} alt='project_img' />
              <span className='Projects-tech'>HTML, CSS/SASS, JS</span>
              <p className='Projects-descr'>
                This page was created as a OOP Javascript practice, during my
                Kodilla bootcamp.
              </p>
              <div className='Project-button'>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://pizza-kodilla-54318.herokuapp.com/'>
                    Demo
                  </a>
                </button>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://github.com/shivetay/kodilla_pizza'>
                    Code
                  </a>
                </button>
              </div>
            </div>
            <div className='Projects__Project'>
              <h3 className='Projects-name'>Online furniture shop</h3>
              <img className='Projects-photo' src={photo10} alt='project_img' />
              <span className='Projects-tech'>
                HTML, CSS/SASS, React + Redux
              </span>
              <p className='Projects-descr'>
                This page was created as a group project, during my Kodilla
                bootcamp. Main goal here was, to deliver working site for
                customer.
              </p>
              <div className='Project-button'>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://stupefied-lewin-977cb1.netlify.com/'>
                    Demo
                  </a>
                </button>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://github.com/Neonides/kodilla-wdp-1912-01'>
                    Code
                  </a>
                </button>
              </div>
            </div>
            <div className='Projects__Project'>
              <h3 className='Projects-name'>JS Dashboard</h3>
              <img className='Projects-photo' src={photo11} alt='project_img' />
              <span className='Projects-tech'>HTML, CSS/SASS, JS</span>
              <p className='Projects-descr'>
                This page was created as a singel project, during my Kodilla
                bootcamp. Main goal here was, to cut PSD to working website.
              </p>
              <div className='Project-button'>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://shivetay.github.io/kodilla_dashbord/'>
                    Demo
                  </a>
                </button>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://github.com/shivetay/kodilla_dashbord'>
                    Code
                  </a>
                </button>
              </div>
            </div>
            <div className='Projects__Project'>
              <h3 className='Projects-name'>ToDo React App</h3>
              <img className='Projects-photo' src={photo12} alt='project_img' />
              <span className='Projects-tech'>
                HTML, CSS/SASS, React + Redux
              </span>
              <p className='Projects-descr'>
                This page was created as a React practice, during my Kodilla
                bootcamp.
              </p>
              <div className='Project-button'>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://todo-kodilla.herokuapp.com/'>
                    Demo
                  </a>
                </button>
                <button className='btn'>
                  <a
                    className='btn-aTag'
                    href='https://github.com/shivetay/kodilla_to_do_react'>
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
