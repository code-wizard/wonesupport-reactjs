import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './admin-call-view.styles.scss';

class AdminCallView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'offline'
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
    render() {
        const { value } = this.state
        return(
            <div className="admin-call-view">
                <p>What agents see</p>
                <div className="admin-call-panel">
                  <div className="call-header">
                      <h6>Talk</h6>
                      <div className="call-status">
                          <span className={`status-call ${value === 'online' ? 'online': ''}`}></span>
                          <select className="form-control set-status" 
                            id="select-status" 
                            onChange={this.handleChange} 
                            value={this.state.value}>
                              <option value="online">Online</option>
                              <option value="offline">Offline</option>
                          </select>
                      </div>
                  </div>
                  <div className="call-sub-header">
                      <span className="-icon">
                          <i className="past-calls-icon"></i>
                      </span>
                      <span>Mike Adenuga</span>
                      <Link to="#">
                          <span className="-icon">
                              <i className="dialer-icon"></i>
                          </span>
                      </Link>
                  </div>
                  {value === 'offline' ? 
                  (<div className="call-body">
                      <span className="-icon">
                          <i className="call-cancel-icon"></i>
                      </span>
                      <p>Currently Offline</p>
                  </div>): 
                  (<div className="call-body-online">
                      <div className="call-title">Incoming call</div>
                      <div className="time-summary">Answer in:22s</div>
                      <div className="wone_loc">
                          <span className="-icon">
                              <i className="voice-call"></i>
                          </span>
                          <h6>WoneSupport</h6>
                          <span>Lagos Nigeria</span>
                      </div>
                      <div className="name-tag">
                          <span className="-icon">
                              <i className="past-calls-icon"></i>
                          </span>
                          <span>Olaekan Richard</span>
                      </div>
                      <div className="call-btn-pad">
                          <button className="cancel-call">Decline</button>
                          <button className="accept-call">Accept</button>
                      </div>
                  </div>)}
                </div>
            </div>
        )
    }
}

export default AdminCallView;