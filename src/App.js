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
              <Route path={`${match.path}app`} component={AppRoutes} />
              <Route path="/login" component={Login} />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
