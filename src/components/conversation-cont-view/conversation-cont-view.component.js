import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { WoneContView, WoneInnerHeader, WoneInnerMain } from '../common';
import CallDropDown from './call-dropdown.component';
// import CallOverlay from './call-overlay.component';
import PhoneModal from './phone-modal.component';
import './conversation-cont-view.styles.scss';

class ConversationContentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCallDropdown: false,
            setShow: false
        }
    }

    toggleCallDropDown = () => {
        this.setState({ isCallDropdown: !this.state.isCallDropdown })
    }
    handleShow = () => {
        this.setState({
            setShow: true
        })
    }
    handleClose = () => {
        this.setState({
            setShow: false
        })
    }
    render() {
        const { isCallDropdown } = this.state
        return(
          <WoneContView>
              <WoneInnerHeader>
                <div className="profile-tag">
                    <div className="admin__profile-details" id="viewUser">
                        <span className="profile-img">
                            <img src={require("../../assets/img/users/user1.jpg")} alt="Generic9image" />
                        </span>
                        <h6>Mike Adenuga</h6>
                    </div>
                    <button className="add__more rect">+</button>
                </div>
                <div className="add-user nav">
                    <ul className="links__section-icon">
                    <li><Link to="#"><span className="-icon"><i className="transfer-icon"></i></span></Link></li>
                    <li><Link to="#"><span className="-icon"><i className="file-share-icon"></i></span></Link></li>
                    <li><Link to="#"><span className="-icon"><i className="chat-video-call-icon"></i></span></Link></li>
                    <li className="woneDropdown">
                        <Link href="#" className="toggleDropdownTrigger" onClick={this.toggleCallDropDown}>
                            <span className="-icon"><i className="phone-call-icon"></i></span>
                        </Link>
                        {isCallDropdown && <CallDropDown close={this.toggleCallDropDown} openModal={this.handleShow} />}
                    </li>
                    </ul>
                </div>
              </WoneInnerHeader>
              <WoneInnerMain adminChat noTab>
                {/* Agents Listing  */}
                <section className="wone__tab-content no-tabs p-0">
                <article>
                    <div className="chat-board admin__chat-board">
                    <div className="chat-messages">
                        {/* <div class="message-time">June 23</div>  */}
                        <div className="other-message">
                        <span className="profile-img">
                            <i className="img-placer"><img className="mr-3" src={require("../../assets/img/users/user1.jpg")} alt="Generic1image" /></i>
                        </span>
                        <div className="message-wrapper">
                            <p>Chidinma, <span className="time__view">10:30PM</span></p>
                            <div className="message-pad">
                            Please check this file? Then you can understand little bit better, Let me know when you
                            can get back to me.
                            <div className="options">
                                <span className="-icon">
                                <i className="mm-options-icon"></i>
                                </span>
                                <div className="drop__options">
                                <ul>
                                    <li><Link to="#">Quote</Link></li>
                                    <li><Link to="#">Delete</Link></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="shared__files">
                            <div className="file__item"><img src={require("../../assets/img/banner-image.png")} alt="file_name" /></div>
                            <div class="file__item"><img src={require("../../assets/img/banner-image.png")} alt="file_name" /></div>
                            <div class="file__item"><img src={require("../../assets/img/banner-image.png")} alt="file_name" /></div>
                             {/* If files greater than 4  */}
                            <div className="file__item">
                                <img src={require("../../assets/img/banner-image.png")} alt="file_name" />
                                <span className="overlay__morefiles">
                                <Link to="#">+10</Link>
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="message-time-start">today</div>
                        <div className="my-message">
                        <div className="message-wrapper">
                            <p>Chidinma, <span className="time__view">10:30PM</span></p>
                            <div className="message-pad con_pad">
                            Please check this file? Then you can understand little bit better, Let me know when you
                            can get back to me.
                            <div className="options">
                                <span className="-icon">
                                <i className="mm-options-icon"></i>
                                </span>
                                <div className="drop__options">
                                <ul>
                                    <li><Link to="#">Quote</Link></li>
                                    <li><Link to="#">Delete</Link></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <span className="profile-img">
                            <i className="img-placer"><img className="mr-3" src={require("../../assets/img/users/user1.jpg")} alt="Generic2image" /></i>
                        </span>
                        </div>
                    </div>
                    <div className="chat-inputs">
                        <div className="form-group form-wrapper">
                        <span className="chat-share-file -icon wone-set">
                            <i className="file-share-icon"></i>
                            <input type="file" />
                        </span>
                        <input type="text" className="form-control" placeholder="Enter message" />
                        <button className="btn btn-primary agent-btn chat-send">
                            <span className="-icon wone-set"><i className="chat-send-icon"></i></span>
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
                </section>
                <section className="wone__right-view">
                <div className="wone__side-detail-header">
                    <div className="wone__image">
                    <img src={require("../../assets/img/users/user1.jpg")} alt="user_name" />
                    </div>
                    <h5>Olumide Ayodeji</h5>
                    <p>Online <span className="dot online"></span></p>
                </div>
                <div className="wone__side-detail-body">
                    <p>+234 809 4565 3333</p>
                    <p>olumideayodeji@gmail.com</p>
                    <hr />
                    <div className="option_wrapper">
                    <Link to="#">Share files</Link>
                    <Link to="#">view all</Link>
                    </div>
                    <div className="wone__unstyled wone__share-list">
                     {/* item */}
                    <div className="media wone__share-item">
                        <span class="profile-img">
                        <img src={require("../../assets/img/users/user2.jpg")} alt="Generic3image" />
                        </span>
                        <div className="media-body">
                        <h6>Monday, July 2, 2019</h6>
                        <span>10:30AM</span>
                        </div>
                        <span className="-icon"><i className="trash-icon"></i></span>
                    </div>
                     {/* item  */}
                    <div className="media wone__share-item">
                        <span className="profile-img">
                        <img src={require("../../assets/img/users/user2.jpg")} alt="Generic3image" />
                        </span>
                        <div className="media-body">
                        <h6>Monday, July 2, 2019</h6>
                        <span>10:30AM</span>
                        </div>
                        <span className="-icon"><i className="trash-icon"></i></span>
                    </div>
                    {/* item  */}
                    <div className="media wone__share-item">
                        <span className="profile-img">
                        <img src={require("../../assets/img/users/user2.jpg")} alt="Generic4image" />
                        </span>
                        <div className="media-body">
                        <h6>Monday, July 2, 2019</h6>
                        <span>10:30AM</span>
                        </div>
                        <span className="-icon"><i className="trash-icon"></i></span>
                    </div>
                     {/* item  */}
                    <div className="media wone__share-item">
                        <span className="profile-img">
                        <img src={require("../../assets/img/users/user2.jpg")} alt="Generic5image" />
                        </span>
                        <div className="media-body">
                        <h6>Monday, July 2, 2019</h6>
                        <span>10:30AM</span>
                        </div>
                        <span className="-icon"><i className="trash-icon"></i></span>
                    </div>
                    </div>
                </div>
                </section>
                {/* End Tabs */}
                </WoneInnerMain>

                {/* {!isCallDropdown && <CallOverlay /> } */}
                <PhoneModal show={this.state.setShow} handleClose={this.handleClose}/>
          </WoneContView>
        )
    }
}

export default ConversationContentView;