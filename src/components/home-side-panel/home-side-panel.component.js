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
                    {/* <ul style={{marginTop: '20px'}}>
                        <li><Link className={this.isPathActive('/billing/subscription') ? 'active': ''} to="/payment-reference/subscription">Subscription</Link></li>
                        <li><Link className={this.isPathActive('/billing/invoice') ? 'active': ''} to="/payment-reference/invoice">Invoice</Link></li>
                        <li><Link className={this.isPathActive('/billing/more-products') ? 'active': ''} to="/payment-reference/more-products">More products</Link></li>
                    </ul> */}
                </div>
           </WoneSidePanel>
        )
    }
}

export default withRouter(HomeSidePanel);
