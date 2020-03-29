import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import About from './components/views/About/About';
import Skills from './components/views/Skills/Skills';
import Contact from './components/views/Contact/Contact';
import Projects from './components/views/Projects/Projects';
// import Project from './components/views/Project/Project';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames='fade'>
                <Switch location={location}>
                  <Route exact path='/' component={Home} />
                  <Route path='/projects' component={Projects} />
                  {/* <Route exact path='/projects/:id' component={Project} /> */}
                  <Route path='/skills' component={Skills} />
                  <Route path='/about' component={About} />
                  <Route path='/contact' component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
