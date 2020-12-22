/* eslint-disable no-unused-vars */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Quote from './components/Quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path ="/" component={Home} />
      <Route exact path ="/calculator" component={App} />
      <Route path ="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;