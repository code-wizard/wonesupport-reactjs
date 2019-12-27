import React, {Component} from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import './content-view.styles.scss';
import { WoneContView, WoneInnerHeader, NewUserBtn } from '../common';
import CompanyProfile from '../company-profile.component';
import Home from '../home.component';
import LiveChat from '../live-chat/live-chat.component';
import VoiceCall from '../live-chat/voice-call.component';
import VideoCall from '../live-chat/video-call.component';
import Faqs from '../live-chat/faqs.component';
import DiscussionForum from '../live-chat/discussion-forum.component';
import Agents from '../agents/agents.component';




class ContentView extends Component {
    componentDidMount() { }
    render() {
        const {match} = this.props
        return (
            <WoneContView>
                <WoneInnerHeader>
                    <CompanyProfile />
                    <NewUserBtn />
                </WoneInnerHeader>
                    <Switch>
                        <Redirect exact from={`${match.path}/`} to={`${match.path}/home`} />
                        <Route path={`${match.path}/live-chart`} component={LiveChat} />
                        <Route path={`${match.path}/home`} component={Home} />
                        <Route path={`${match.path}/agents`} component={Agents} />
                        <Route path={`${match.path}/faqs`} component={Faqs} />
                        <Route path={`${match.path}/voice-call`} component={VoiceCall} />
                        <Route path={`${match.path}/video-call`} component={VideoCall} />
                        <Route path={`${match.path}/discussion-forum`} component={DiscussionForum} />
                    </Switch>
            </WoneContView>
        )
    }

}

export default withRouter(ContentView);