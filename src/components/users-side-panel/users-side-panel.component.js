import React, { Component } from 'react';
import { WoneSidePanel, WoneInnerHeader } from '../common';
import { Accordion, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import './users-side-panel.styles.scss';


class UsersSidePanel extends Component {
    render() {
        return(
           <WoneSidePanel>
               <WoneInnerHeader>
                    <button className="wone-users-btn add-users">
                        <FontAwesomeIcon icon={faUser} />
                        {" "}<span>All users</span>
                    </button>
                    <Link className="link-add" to="#">
                        <FontAwesomeIcon icon={faPlus} />
                        {" "}Add
                    </Link>
               </WoneInnerHeader>
               <div className="wone-links">
                  <div className="links-accordions">
                    <div className="link-accordion">
                        <Accordion>
                            <div className="card-header collapsed">
                                <Accordion.Toggle eventKey="0">
                                    Start guide
                                </Accordion.Toggle>
                                {/* <span className="expand_caret caret -icon">
                                    <i className="caret-icon"></i>
                                </span> */}
                            </div>
                            <Accordion.Collapse eventKey="0">
                                <div className="wrap-linker">
                                    <div className="wrap-full-size">
                                      <Link to="#">
                                        <div className="wone_admin-tag"></div>
                                      </Link> 
                                    </div>
                                    <div className="wrap-full-size"></div>
                                    <div className="wrap-full-size"></div>
                                    <div className="wrap-full-size"></div>
                                    <div className="wrap-full-size"></div>
                                </div>
                            </Accordion.Collapse>
                            <div>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Click me!
                                </Accordion.Toggle>
                            </div>
                            <Accordion.Collapse eventKey="1">
                                <div>Hello! I'm another body</div>
                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                  </div>
               </div>
           </WoneSidePanel> 
        );
    }
}

export default UsersSidePanel;