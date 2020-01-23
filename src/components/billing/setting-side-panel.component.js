import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom'
import { WoneSidePanel, WoneInnerHeader } from '../common';

class SettingSidePanel extends Component {
    isPathActive = (path) => {
        return this.props.location.pathname.startsWith(path);
    }
    render() {
        return(
            <WoneSidePanel>
                <WoneInnerHeader>
                    <span className="page-title">Settings</span>
                </WoneInnerHeader> 
                <div className="wone-links">
                    <ul>
                        <li className="link-group-title">General Settings</li>
                        <li><Link className={this.isPathActive('/app/settings/account') ? 'active': ''} to="/app/settings/account">Account</Link></li>
                        <li><Link className={this.isPathActive('/app/settings/agents') ? 'active': ''} to="/app/settings/agents">Agents</Link></li>
                        <li><Link className={this.isPathActive('/app/settings/department') ? 'active': ''} to="/app/settings/department">Departments</Link></li>
                        <li><Link className={this.isPathActive('/app/settings/subscriptions') ? 'active': ''} to="/app/settings/subscriptions">Subscriptions</Link></li>
                        <li><Link className={this.isPathActive('/app/settings/support-group') ? 'active': ''} to="/app/settings/support-group">Support Group</Link></li>
                        {/* <li><Link className={this.isPathActive('/dashboard/customer') ? 'active': ''} to="/dashboard/customer">Customers</Link></li> */}
                        {/* <li><Link className={this.isPathActive('/dashboard/banned') ? 'active': ''} to="/dashboard/banned">Banned</Link></li> */}
                        {/* <li className="link-group-title">Manage</li>
                        <li><Link className={this.isPathActive('/settings/people') ? 'active': ''} to="/settings/people">People</Link></li>
                        <li><Link className={this.isPathActive('/settings/user-field') ? 'active': ''} to="/settings/user-field">User Fields</Link></li>
                        <li><Link className={this.isPathActive('/settings/organizational-field') ? 'active': ''} to="/settings/organizational-field">Organizational Fields</Link></li>
                        <li><Link className={this.isPathActive('/settings/views') ? 'active': ''} to="/settings/views">Views</Link></li> */}
                        <li className="link-group-title">Channels</li>
                        <li><Link className={this.isPathActive('/app/settings/live-chart') ? 'active': ''} to="/app/settings/live-chart">Live Chat</Link></li>
                        <li><Link className={this.isPathActive('/app/settings/voice-call') ? 'active': ''} to="/app/settings/voice-call">Voice Calls</Link></li>
                        {/* <li><Link className={this.isPathActive('/dashboard/video-call') ? 'active': ''} to="/dashboard/video-call">Video Calls</Link></li> */}
                        <li><Link className={this.isPathActive('/app/settings/faqs') ? 'active': ''} to="/app/settings/faqs">FAQs</Link></li>
                        {/* <li><Link className={this.isPathActive('/dashboard/discussion-forum') ? 'active': ''} to="/dashboard/discussion-forum">Discussion Forum</Link></li> */}
                    </ul>
              </div>
            </WoneSidePanel>
        )
    }
}

export default withRouter(SettingSidePanel);