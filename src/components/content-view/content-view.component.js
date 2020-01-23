import React, {Component} from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import './content-view.styles.scss';
import { WoneContView, WoneInnerHeader } from '../common';
import CompanyProfile from '../company-profile.component';
import Home from '../home.component';




class ContentView extends Component {
    render() {
        const {match} = this.props
        return (
            <WoneContView>
                <WoneInnerHeader>
                    <CompanyProfile />
                    {/* <NewUserBtn /> */}
                </WoneInnerHeader>
                    <Switch>
                        <Redirect exact from={`${match.path}/`} to={`${match.path}/home`} />
                        <Route path={`${match.path}/home`} component={Home} />
                    </Switch>
            </WoneContView>
        )
    }

}

export default withRouter(ContentView);