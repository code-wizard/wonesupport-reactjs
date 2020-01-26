import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.scss';

import Login from './pages/login/login.component';
import AppRoutes from './AppRoutes';


class App extends Component {
  render() {
    const { match } = this.props
    return (
        <div>
          <Switch>
              <Route path="/login" component={Login} />
              <Route exact path="/" component={Login} />
              <Route path={`${match.path}app`} component={AppRoutes} />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
