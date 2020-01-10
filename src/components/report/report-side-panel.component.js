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
                <div className="wone-links" style={{height: '82vh'}}>
                    <ul style={{marginTop: '20px'}}>
                        <li><Link className={this.isPathActive('/report/chat-report') ? 'active': ''} to="/report/chat-report">Chat report</Link></li>
                        <li><Link className={this.isPathActive('/billing/invoice') ? 'active': ''} to="/">Voice call report</Link></li>
                        <li><Link className={this.isPathActive('/billing/more-products') ? 'active': ''} to="/">Faq report</Link></li>
                    </ul>
                </div>
           </WoneSidePanel>
        )
    }
}

export default withRouter(ReportSidePanel);
