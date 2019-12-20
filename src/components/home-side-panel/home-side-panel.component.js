import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WoneSidePanel, WoneInnerHeader } from '../common';
import './home-side-panel.styles.scss';


class HomeSidePanel extends Component {
    render() {
        return(
           <WoneSidePanel>
              <WoneInnerHeader>
                  <span className="page-title">Admin Home</span>
              </WoneInnerHeader> 
              <div className="wone-links">
                <ul>
                 <li className="link-group-title">Manage</li>
                 <li><Link to="/">People</Link></li>
                 <li><Link to="/">User Fields</Link></li>
                 <li><Link to="/">Organizational Fields</Link></li>
                 <li><Link to="/">Views</Link></li>
                 <li className="link-group-title">Channels</li>
                 <li><Link to="/">Live Chat</Link></li>
                 <li><Link to="/">Voice Calls</Link></li>
                 <li><Link to="/">Video Calls</Link></li>
                 <li><Link to="/">FAQs</Link></li>
                 <li><Link to="/">Discussion Forum</Link></li>
                 <li className="link-group-title">Settings</li>
                 <li><Link to="/">Account</Link></li>
                 <li><Link to="/">Agents</Link></li>
                 <li><Link to="/">Departments</Link></li>
                 <li><Link to="/">Subscriptions</Link></li>
                 <li><Link to="/">Complaints New</Link></li>
                 <li><Link to="/">Customers</Link></li>
                 <li><Link to="/">Banned</Link></li>
                </ul>
              </div>
           </WoneSidePanel>
        )
    }
}

export default HomeSidePanel;
