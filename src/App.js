import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          {/* <Route exact path='/projects/:id' component={Project} /> */}
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
