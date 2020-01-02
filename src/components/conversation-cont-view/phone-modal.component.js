import React from "react";
import { Modal, ModalBody, TabContainer, TabContent, TabPane, Nav, NavItem } from 'react-bootstrap';
import './conversation-cont-view.styles.scss';

const PhoneModal = ({ show, handleClose }) => (
    <Modal dialogClassName={"login-modal"} show={show} onHide={handleClose} centered>
        <Modal.Header>
            <div className="dial__input">
                <div className="dial__code">
                  (+234)
                </div>
                <div className="dial__input">
                  <input type="text" />
                  <span className="-icon"><i className="delete-entry-icon"></i></span>
                </div>
            </div>
        </Modal.Header>
        <ModalBody>
            <div className="dial__dialpad">
              <div className="dial__pad">
                  <div className="dial__number"><span>1</span><span></span></div>
                  <div className="dial__number"><span>2</span><span>abc</span></div>
                  <div className="dial__number"><span>3</span><span>def</span></div>
                  <div className="dial__number"><span>4</span><span>ghi</span></div>
                  <div className="dial__number"><span>5</span><span>jkl</span></div>
                  <div className="dial__number"><span>6</span><span>mno</span></div>
                  <div className="dial__number"><span>7</span><span>pqrs</span></div>
                  <div className="dial__number"><span>8</span><span>tuv</span></div>
                  <div className="dial__number"><span>9</span><span>wxyz</span></div>
                  <div className="dial__number"><span>*</span><span></span></div>
                  <div className="dial__number"><span>0</span><span>+</span></div>
                  <div className="dial__number"><span>#</span><span></span></div>
              </div>
              <div className="dial__options">
                  <button className="agent-btn dial__chat"><span className="-icon"><i className="chat-tab-icon"></i></span></button>
                  <button className="agent-btn dial__call"><span className="-icon"><i className="phone-call-icon"></i></span></button>
              </div>
              <div className="dial__tabs">
                {/* <ul className="nav nav-tabs" id="dialTabs" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link" id="dialCalls-tab" data-toggle="tab" href="#dialCalls" role="tab" aria-controls="dialCalls"
                      aria-selected="false">
                      <span class="-icon"><i class="dial-calls-icon"></i></span>
                      Calls</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="dialUsers-tab" data-toggle="tab" href="#dialUsers" role="tab" aria-controls="dialUsers"
                      aria-selected="false">
                      <span class="-icon"><i class="dial-users-icon"></i></span>
                      users</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
                      aria-selected="false true">
                        <span class="-icon"><i class="dial-keypad-icon"></i></span>keypad</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="dialText-tab" data-toggle="tab" href="#dialText" role="tab" aria-controls="dialText"
                      aria-selected="false">
                      <span class="-icon"><i class="dial-text-icon"></i></span>
                      Text</a>
                  </li>
                </ul> */}
              </div>
            </div>
        </ModalBody>
        <button type="button" className="et_close-btn" onClick={handleClose}>x</button>
    </Modal>
)

export default PhoneModal;