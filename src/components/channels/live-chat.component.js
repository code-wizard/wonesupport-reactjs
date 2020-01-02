import React from 'react';
import { Link } from 'react-router-dom'
import { WoneInnerMain } from '../common';
import './live-chat.styles.scss'

const LiveChat = () => (
   <WoneInnerMain>
       <article>
            <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                <h5 className="sx-page-title">LIVE CHAT</h5>
                <p>The Chat Channels lets your customers chat live with an agent from an existing complaints.<br />
                        All chat sessions are recorded as complaints.{" "}<Link to="/">Learnmore</Link> </p>
            </div>
       </article>
       <article>
            <div className="col-sm-12 col-md-12 col-lg-12 p-0 mb-3">
                <p>Wonesupport Chat lets you talk to your customers when you’re being searched for, You can post ad that only will be shown to your customer.</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                <div className="wone__caption-content">
                    <div className="wone__bb-style">
                        <h6>WoneSupport Live Chat</h6>
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
                        <h6>Chat Dashboard</h6>
                        <p>Manage your chat departments and access chat analytics</p>
                    </div>
                </div>
            </div>
       </article>
   </WoneInnerMain>
) 

export default LiveChat;