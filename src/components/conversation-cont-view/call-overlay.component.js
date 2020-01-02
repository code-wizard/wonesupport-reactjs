import React from 'react';


const CallOverlay = () => {
    return(
        <div className="call__overlay">
        <div className="call__options">
            {/* Header section */}
          <div className="call__header">
            <span className="expand_icon" id="viewToggle">
              <span className="-icon"><i className="resize-icon"></i></span>
            </span>
            <span className="users__options">
              <span className="add_tocall">
                <span className="-icon"><i className="user-add-icon"></i></span>
              </span>
              <span className="on-call">OY</span>
            </span>
          </div>
            {/* Body section */}
          <div className="call__body">
            <div className="service-profile-img">
              <span className="profile-img">
                <span>
                  <span>
                    <span>
                      <i className="img-placer">
                        <img src={require("../../assets/img/users/user1.jpg")} alt="Generic4image" />
                      </i>
                    </span>
                  </span>
                </span>
              </span>
              <h6>Olumide Ayomide</h6>
              <p>Ringin</p>
            </div>
          </div>
            {/* Footer section */}
          <div className="call__footer">
            <ul>
              <li><span className="control__buttons fff"><span className="-icon"><i className="microphone-icon"></i></span></span></li>
              <li><span className="control__buttons"><span className="-icon"><i className="cancel-video-icon"></i></span></span></li>
              <li><span className="control__buttons fff"><span className="-icon"><i className="record-call-2-icon"></i></span></span></li>
              <li><span className="control__buttons chatMessage"><span className="-icon"><i className="chat-tab-icon"></i></span></span></li>
              <li><span className="control__buttons cancel__call"><span className="-icon"><i className="end-call-2-icon"></i></span></span></li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CallOverlay;