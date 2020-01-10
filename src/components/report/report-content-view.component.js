import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { WoneContView, WoneInnerHeader } from '../common';
import CompanyProfile from '../company-profile.component';
import ChatReport from './chat-report.component';
// import VoiceCall from '../channels/voice-call.component';
// import VideoCall from '../channels/video-call.component';
// import Faqs from '../channels/faqs.component';
// import DiscussionForum from '../channels/discussion-forum.component';
// import Agents from '../settings/agents.component';
// import Account from '../settings/account.component';
// import Department from '../settings/department.component';


const ReportContentView = ({ match }) => {
    return(
        <WoneContView>
            <WoneInnerHeader>
                <CompanyProfile />
            </WoneInnerHeader>
            <Switch>
                <Redirect exact from={`${match.path}/`} to={`${match.path}/chat-report`} />
                <Route path={`${match.path}/chat-report`} component={ChatReport} />
                {/* <Route path={`${match.path}/live-chart`} component={LiveChat} />
                <Route path={`${match.path}/agents`} component={Agents} />
                <Route path={`${match.path}/faqs`} component={Faqs} />
                <Route path={`${match.path}/voice-call`} component={VoiceCall} />
                <Route path={`${match.path}/video-call`} component={VideoCall} />
                <Route path={`${match.path}/discussion-forum`} component={DiscussionForum} />
                <Route path={`${match.path}/account`} component={Account} />
                <Route path={`${match.path}/department`} component={Department} /> */}
            </Switch>
        </WoneContView>
    )
}

export default withRouter(ReportContentView);