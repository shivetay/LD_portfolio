import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import About from './components/views/About/About';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/projects' component={Projects} /> */}
          {/* <Route exact path='/skills' component={Skills} /> */}
          <Route exact path='/about' component={About} />
          {/* <Route exact path='/contact' component={Contact} /> */}
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
