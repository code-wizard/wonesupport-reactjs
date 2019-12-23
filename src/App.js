import React, { Component, Suspense, lazy } from 'react';
import Dashboard from './pages/dashboard/dashboard.component';
import Users from './pages/users/users.component'
import Header from './components/header/header.component';
import SidBar from './components/sidebar/sidebar.component'
import { Switch, Route} from 'react-router-dom'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <SidBar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/all-users" component={Users} />
        </Switch>
      </div>
    );
  }
}

export default App
