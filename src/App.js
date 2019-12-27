import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import './App.scss';

import Header from './components/header/header.component';
import SidBar from './components/sidebar/sidebar.component';
import Spinner from './components/spinner/spinner.component';


const Dashboard = lazy(() => import('./pages/dashboard/dashboard.component'));
const Users = lazy(() => import('./pages/users/users.component'));


class App extends Component {
  render() {
    const { match } = this.props
    return (
      <Suspense fallback={<Spinner />}>
        <div className="app-container">
          <Header />
          <SidBar />
          <Switch>
              <Route path={`${match.path}dashboard`} component={Dashboard} />
              <Route path="/" exact component={Dashboard} />
              <Route path="/all-users" component={Users} />
              <Redirect to="/dashboard" />
          </Switch>
        </div>
      </Suspense>
    );
  }
}

export default withRouter(App);
