import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './conve-side-panel.styles.scss';
import { WoneSidePanel, WoneInnerHeader } from '../common';


class ConversationSidePanel extends Component {

    isPathActive = (path) => {
        return this.props.location.pathname.startsWith(path);
    }

    render() {
        return(
            <WoneSidePanel>
                <WoneInnerHeader wonePadd_15>
                    <ul className="wone__tab__style">
                        <li><Link className={this.isPathActive('/conversation') ? 'active': ''} to="/conversation"><span className="-icon"><i className="chat-tab-icon"></i></span> Chats</Link></li>
                        <li><Link className={this.isPathActive('/all-users') ? 'active': ''} to="/all-users"><span className="-icon"><i className="call-tab-icon"></i></span> Calls</Link></li>
                        <li><Link to="/"><span className="-icon"><i className="user-tab-icon"></i></span> Users</Link></li>
                    </ul>
                </WoneInnerHeader>
                <div className="wone__links">
                <div className="wone__con-card-links">
                    <form className="form-inline">
                    <div className="input-group">
                        <span className="-icon"><i className="search-icon"></i></span>
                        <input type="search" className="form-control" placeholder="Search Here" aria-label="search" aria-describedby="search" />
                    </div>
                    </form>
                    <div className="wone__card-div">
                    <span>Conversation Update</span>
                    <span className="-icon">
                        <i className="sync-icon"></i>
                    </span>
                    </div>

                    <div className="wone__listing-view">
                    <ul className="wone__unstyled">
                        <li className="media">
                        <span className="profile-img">
                            <i className="img-placer">
                            <img className="mr-3" src={require("../../assets/img/users/user1.jpg")} alt="Generic1image" />
                            </i>
                        </span>
                        <div className="media-body">
                            <h6>Babajide sanwo chates with Chidinma</h6>
                            <span>6 minutes ago</span>
                        </div>
                        </li>
                        <li className="media">
                        <span className="profile-img">
                            <i className="img-placer">
                            <img className="mr-3" src={require("../../assets/img/users/user2.jpg")} alt="Generic2image" />
                            </i>
                        </span>
                        <div className="media-body">
                            <h6>Babajide sanwo chates with Chidinma</h6>
                            <span>6 minutes ago</span>
                        </div>
                        </li>
                        <li className="media">
                        <span className="profile-img">
                            <i className="img-placer">
                            <img className="mr-3" src={require("../../assets/img/users/user1.jpg")} alt="Generic3image" />
                            </i>
                        </span>
                        <div className="media-body">
                            <h6>Babajide sanwo chates with Chidinma</h6>
                            <span>6 minutes ago</span>
                        </div>
                        </li>
                        <li className="media">
                        <span className="profile-img">
                            <i className="img-placer">
                            <img className="mr-3" src={require("../../assets/img/users/user2.jpg")} alt="Generic8image" />
                            </i>
                        </span>
                        <div className="media-body">
                            <h6>Babajide sanwo chates with Chidinma</h6>
                            <span>6 minutes ago</span>
                        </div>
                        </li>
                    </ul>

                    <div className="wone__card-div">
                        <span>Agents</span>
                    </div>
                    <ul className="wone__unstyled">
                        <li className="media">
                        <span className="profile-img">
                            <i className="img-placer">
                            <img className="mr-3" src={require("../../assets/img/users/user1.jpg")} alt="Generic7image" />
                            </i>
                        </span>
                        <div className="media-body">
                            <h6>Babajide sanwo chates with Chidinma</h6>
                            <span>6 minutes ago</span>
                        </div>
                        </li>
                        <li className="media">
                        <span className="profile-img">
                            <i className="img-placer">
                            <img className="mr-3" src={require("../../assets/img/users/user2.jpg")} alt="Generic6image" />
                            </i>
                        </span>
                        <div className="media-body">
                            <h6>Babajide sanwo chates with Chidinma</h6>
                            <span>6 minutes ago</span>
                        </div>
                        </li>
                        <li className="media">
                        <span className="profile-img">
                            <i className="img-placer">
                            <img className="mr-3" src={require("../../assets/img/users/user1.jpg")} alt="Generic5image" />
                            </i>
                        </span>
                        <div className="media-body">
                            <h6>Babajide sanwo chates with Chidinma</h6>
                            <span>6 minutes ago</span>
                        </div>
                        </li>
                        <li className="media">
                        <span className="profile-img">
                            <i className="img-placer">
                            <img className="mr-3" src={require("../../assets/img/users/user2.jpg")} alt="Generic4image" />
                            </i>
                        </span>
                        <div className="media-body">
                            <h6>Babajide sanwo chates with Chidinma</h6>
                            <span>6 minutes ago</span>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </WoneSidePanel>
        )
    }
}

export default withRouter(ConversationSidePanel);    