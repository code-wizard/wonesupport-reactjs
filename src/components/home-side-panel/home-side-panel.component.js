import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { WoneSidePanel, WoneInnerHeader } from '../common';
import './home-side-panel.styles.scss';


class HomeSidePanel extends Component {

    isPathActive = (path) => {
        return this.props.location.pathname.startsWith(path);
    }

    render() {
        return(
           <WoneSidePanel>
              <WoneInnerHeader>
                  <span className="page-title">Admin Home</span>
              </WoneInnerHeader> 
              <div className="wone-links">
                <ul>
                 <li className="link-group-title">Manage</li>
                 <li><Link className={this.isPathActive('/dashboard/people') ? 'active': ''} to="/dashboard/people">People</Link></li>
                 <li><Link className={this.isPathActive('/dashboard/user-field') ? 'active': ''} to="/dashboard/user-field">User Fields</Link></li>
                 <li><Link className={this.isPathActive('/dashboard/organizational-field') ? 'active': ''} to="/dashboard/organizational-field">Organizational Fields</Link></li>
                 <li><Link className={this.isPathActive('/dashboard/views') ? 'active': ''} to="/dashboard/views">Views</Link></li>
                 <li className="link-group-title">Channels</li>
                 <li><Link className={this.isPathActive('/dashboard/live-chart') ? 'active': ''} to="/dashboard/live-chart">Live Chat</Link></li>
                 <li><Link className={this.isPathActive('/dashboard/voice-call') ? 'active': ''} to="/dashboard/voice-call">Voice Calls</Link></li>
                 <li><Link className={this.isPathActive('/dashboard/video-call') ? 'active': ''} to="/dashboard/video-call">Video Calls</Link></li>
                 <li><Link className={this.isPathActive('/dashboard/faqs') ? 'active': ''} to="/dashboard/faqs">FAQs</Link></li>
                 <li><Link className={this.isPathActive('/dashboard/discussion-forum') ? 'active': ''} to="/dashboard/discussion-forum">Discussion Forum</Link></li>
                 <li className="link-group-title">Settings</li>
                 <li><Link className={this.isPathActive('/dashboard/account') ? 'active': ''} to="/dashboard/account">Account</Link></li>
                 <li><Link className={this.isPathActive('/dashboard/agents') ? 'active': ''} to="/dashboard/agents">Agents</Link></li>
                 <li><Link className={this.isPathActive('/dashboard/department') ? 'active': ''} to="/dashboard/department">Departments</Link></li>
                 <li><Link className={this.isPathActive('/dashboard/subscriptions') ? 'active': ''} to="/">Subscriptions</Link></li>
                 <li><Link className={this.isPathActive('/dashboard/complaints-new') ? 'active': ''} to="/dashboard/complaints-new">Complaints New</Link></li>
                 <li><Link className={this.isPathActive('/dashboard/customer') ? 'active': ''} to="/dashboard/customer">Customers</Link></li>
                 <li><Link className={this.isPathActive('/dashboard/banned') ? 'active': ''} to="/dashboard/banned">Banned</Link></li>
                </ul>
              </div>
           </WoneSidePanel>
        )
    }
}

export default withRouter(HomeSidePanel);
