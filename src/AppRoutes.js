import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Header from './components/header/header.component';
import SidBar from './components/sidebar/sidebar.component';
import Dashboard from './pages/dashboard/dashboard.component';
import Users from './pages/users/users.component';
import Conversation from './pages/conversation/conversation.component';
import Settings from './pages/settings/settings.component';
import Reports from './pages/reports/reports.component';


class AppRoutes extends Component {
    render() {
        const { match } = this.props
        return(
            <div className="app-container" style={{overflowY: 'hidden'}}>
                <Header />
                <SidBar />
                <Switch>
                    <Redirect exact from={`/app`} to={`${match.path}/dashboard`} />
                    <Route path={`${match.path}/dashboard`} component={Dashboard} />
                    <Route path={`${match.path}/all-users`} component={Users} />
                    <Route path={`${match.path}/conversation`} component={Conversation} />
                    <Route path={`${match.path}/report`} component={Reports} />
                    <Route path={`${match.path}/settings`} component={Settings} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(AppRoutes);

