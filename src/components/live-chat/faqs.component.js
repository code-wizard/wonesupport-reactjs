import React from 'react';
import { WoneInnerMain } from '../common';
import { Link } from 'react-router-dom';
import './live-chat.styles.scss';

const Faqs = () => (
    <WoneInnerMain>
        <article>
            <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                <h5 className="sx-page-title">FREQUENTLY ANSWERED QUESTIONS</h5>
                <p>The FAQs Channels lets your customers have a read FAQs on the platform and they can send in there complains.<br />
                    All FAQs sessions are documented as Answers to your questions.{" "}<Link to="/">Learnmore</Link> </p>
            </div>
        </article>
        <article>
            <div className="col-sm-12 col-md-12 col-lg-12 p-0 mb-3">
                <p>Wonesupport FAQs provides answers for most of the frequently asked questions and it can be updated many times, to provide the best of information to your customers.</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                <div className="wone__caption-content">
                    <div className="wone__bb-style">
                        <h6>WoneSupport FAQs</h6>
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
                        <h6>FAQs Dashboard</h6>
                        <p>Manage your FAQs departments and access FAQs analytics</p>
                    </div>
                </div>
            </div>
        </article>
    </WoneInnerMain>
)

export default Faqs;