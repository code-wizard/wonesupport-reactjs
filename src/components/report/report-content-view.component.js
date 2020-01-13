import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { WoneContView, WoneInnerHeader } from '../common';
import CompanyProfile from '../company-profile.component';
import ChatReport from './chat-report.component';
import FaqReport from './faq-report.component.js';
import VoiceReport from './voice-report.component.js';



const ReportContentView = ({ match }) => {
    return(
        <WoneContView>
            <WoneInnerHeader>
                <CompanyProfile />
            </WoneInnerHeader>
            <Switch>
                <Redirect exact from={`${match.path}/`} to={`${match.path}/chat-report`} />
                <Route path={`${match.path}/chat-report`} component={ChatReport} />
                <Route path={`${match.path}/faq-report`} component={FaqReport} />
                <Route path={`${match.path}/voice-report`} component={VoiceReport} />
            </Switch>
        </WoneContView>
    )
}

export default withRouter(ReportContentView);