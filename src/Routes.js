/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path ="/" component={Home} />
      <Route path ="/calculator" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;