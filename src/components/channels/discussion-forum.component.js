import React from 'react';
import { Link } from 'react-router-dom'
import { WoneInnerMain } from '../common';
import './live-chat.styles.scss';


const DiscussionForum = () => (
    <WoneInnerMain>
        <article>
            <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                <h5 className="sx-page-title">Discussion Forum</h5>
                <p>The Discussion Forum Channels lets your customers have access to our community channel, to get to contribute to trending topics.<br />
                    Always stays updated.{" "}<Link to="/">Learnmore</Link> </p>
            </div>
        </article>
        <article>
            <div className="col-sm-12 col-md-12 col-lg-12 p-0 mb-3">
                <p>Wonesupport Discussion Forum Provides your end user to join our community so as to be part of interesting topics, Trending topics. and so on.</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                <div className="wone__caption-content">
                    <div className="wone__bb-style">
                        <h6>WoneSupport Discussion Forum</h6>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                            <td>Support@Subscription</td> 
                            <td>Free</td> 
                            </tr>
                            <tr>
                            <td>Agents</td> 
                            <td>1 of 5 agents Used</td> 
                            </tr>
                            <tr>
                            <td>Concurrent Chats</td> 
                            <td>Unlimited</td> 
                            </tr>
                            <tr>
                            <td>Departments</td> 
                            <td>Unlimited</td> 
                            </tr>
                            <tr>
                            <td>Triggered</td> 
                            <td>Unlimited</td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                <h6>Settings</h6>
                <div className="wone_admin-tag">
                    <div className="tag-images">
                        <img src={require("../../assets/img/icons/live-chats-icon.svg")} alt="chat-logo" />
                    </div>
                    <div className="content">
                        <h6>Discussion Forum Dashboard</h6>
                        <p>Manage your Discussion departments and access analytics</p>
                    </div>
                </div>
            </div>
        </article>
    </WoneInnerMain> 
) 

export default DiscussionForum; 