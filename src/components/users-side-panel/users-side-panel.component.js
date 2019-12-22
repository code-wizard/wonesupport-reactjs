import React, { Component } from 'react';
import { WoneSidePanel, WoneInnerHeader } from '../common';
import { Accordion } from 'react-bootstrap'
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
                                            <div className="wone_admin-tag">
                                                <div className="tag-images">
                                                    <img src={require("../../assets/img/icons/live-chats-icon.svg")} alt="live chat" />
                                                    <h6>Live Chat</h6>
                                                </div>
                                                <p>Learn more about live chat</p>
                                            </div>
                                        </Link> 
                                    </div>
                                    <div className="wrap-full-size">
                                        <Link to="#">
                                            <div className="wone_admin-tag">
                                                <div className="tag-images">
                                                    <img src={require("../../assets/img/icons/voice-calls.svg")} alt="voice chat" />
                                                    <h6>Voice Call</h6>
                                                </div>
                                                <p>Learn more about Voice call</p>
                                            </div>
                                        </Link>  
                                    </div>
                                    <div className="wrap-full-size">
                                        <Link to="#">
                                            <div className="wone_admin-tag">
                                                <div className="tag-images">
                                                    <img src={require("../../assets/img/icons/live-chats-icon.svg")} alt="faqs" />
                                                    <h6>FAQs</h6>
                                                </div>
                                                <p>Learn more about FAQs</p>
                                            </div>
                                        </Link> 
                                    </div>
                                    <div className="wrap-full-size">
                                        <Link to="#">
                                            <div className="wone_admin-tag">
                                                <div className="tag-images">
                                                    <img src={require("../../assets/img/icons/video-calls.svg")} alt="video chat" />
                                                    <h6>Video Call</h6>
                                                </div>
                                                <p>Learn more about Video call</p>
                                            </div>
                                        </Link> 
                                    </div>
                                    <div className="wrap-full-size">
                                        <Link to="#">
                                            <div className="wone_admin-tag">
                                                <div className="tag-images">
                                                    <img src={require("../../assets/img/icons/dis-forums.svg")} alt="discussion forum" />
                                                    <h6>Discussion Forum</h6>
                                                </div>
                                                <p>Learn more about Discussion Forum</p>
                                            </div>
                                        </Link> 
                                    </div>
                                    <div className="wrap-full-size">
                                        <Link to="#">
                                            <div className="wone_admin-tag">
                                                <div className="tag-images">
                                                    <img src={require("../../assets/img/icons/wone-supports.svg")} alt="support" />
                                                    <h6>Support</h6>
                                                </div>
                                                <p>Learn more about live chat</p>
                                            </div>
                                        </Link> 
                                    </div>
                                </div>
                            </Accordion.Collapse>
                            <div className="card-header">
                                <Accordion.Toggle eventKey="1">
                                    People
                                </Accordion.Toggle>
                            </div>
                            <Accordion.Collapse eventKey="1">
                                <div></div>
                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                  </div>
                  <ul className="links-accordions">
                    <li>
                        <Link to="#">Conversations</Link>
                    </li>
                    <li className="links-accordions">
                        <Link to="#">Accounts</Link>
                    </li>
                  </ul>
               </div>
           </WoneSidePanel> 
        );
    }
}

export default UsersSidePanel;