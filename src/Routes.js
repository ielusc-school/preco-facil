import React from 'react';
import  { Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import About from './pages/about/index';
import NotFound from './pages/notfound/index';

export default () => {
  return  (
    <Switch>
      <Route exact path ='/'>
        <Home />
        </Route>
      <Route exact path ='/sobre'>
        <About />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}