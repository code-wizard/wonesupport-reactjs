import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { WoneSidePanel, WoneInnerHeader } from '../common';


class ReportSidePanel extends Component {

    isPathActive = (path) => {
        return this.props.location.pathname.startsWith(path);
    }

    render() {
        return(
           <WoneSidePanel>
              <WoneInnerHeader>
                  <span className="page-title">Report</span>
              </WoneInnerHeader> 
                <div className="wone-links">
                    <ul style={{marginTop: '20px'}}>
                        <li><Link className={this.isPathActive('/app/report/chat-report') ? 'active': ''} to="/app/report/chat-report">Chat report</Link></li>
                        <li><Link className={this.isPathActive('/app/report/voice-report') ? 'active': ''} to="/app/report/voice-report">Voice call report</Link></li>
                        <li><Link className={this.isPathActive('/app/report/faq-report') ? 'active': ''} to="/app/report/faq-report">Faq report</Link></li>
                    </ul>
                </div>
           </WoneSidePanel>
        )
    }
}

export default withRouter(ReportSidePanel);
