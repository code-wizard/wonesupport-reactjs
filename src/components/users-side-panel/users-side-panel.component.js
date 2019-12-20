import React, { Component } from 'react';
import { WoneSidePanel, WoneInnerHeader } from '../common';
import { Link } from 'react-router-dom'
import './users-side-panel.styles.scss';


class UsersSidePanel extends Component {
    render() {
        return(
           <WoneSidePanel>
               <WoneInnerHeader>
                    <button className="wone-users-btn add-users">
                        <span className="fa fa-user"></span>
                        All users
                    </button>
                    <Link className="link-add">
                        <span className="fa fa-plus"></span>
                        Add
                    </Link>
               </WoneInnerHeader>
               <div className="wone-links">
                  <div className="links-accordions">
                    <div className="link-accordion">
                        
                    </div>
                  </div>
               </div>
           </WoneSidePanel> 
        );
    }
}

export default UsersSidePanel;