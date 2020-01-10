import React, {Component} from 'react';
import './sidebar.styles.scss'
import { Link, withRouter } from 'react-router-dom'
import Logo from '../../assets/img/wone-logo.svg'

class SideBar extends Component {
    isPathActive = (path) => {
        return this.props.location.pathname.startsWith(path);
    }

    render() {
       return(
        <div className="wone-sidebar">
           <div className="wone-logo">
              <Link to="/dashboard">
                  <img src={Logo} alt="wone-support-logo" />
              </Link>
           </div> 
           <ul>
            <li>
              <Link className={this.isPathActive('/dashboard') ? 'active': ''} to="/dashboard">
                  <span className="-icon">
                      <i className="home-icon"></i>
                  </span>
                  <span className="menu-title">
                      Home
                  </span>
              </Link>
            </li>
            <li>
              <Link className={this.isPathActive('/all-users') ? 'active': ''} to="/all-users">
                  <span className="-icon">
                      <i className="users-icon"></i>
                  </span>
                  <span className="menu-title">
                      All Users
                  </span>
              </Link>
            </li>
            <li>
              <Link className={this.isPathActive('/report') ? 'active': ''} to="/report">
                  <span className="-icon">
                      <i className="timing-icon"></i>
                  </span>
                  <span className="menu-title">Timing</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                  <span className="-icon">
                      <i className="progress-icon"></i>
                  </span>
                  <span className="menu-title">Progress</span>
              </Link>
            </li>
            <li>
              <Link className={this.isPathActive('/settings') ? 'active': ''} to="/settings">
                  <span className="-icon">
                      <i className="settings-icon"></i>
                  </span>
                  <span className="menu-title">Settings</span>
              </Link>
            </li>
           </ul>
        </div>
       )
    }
}

export default withRouter(SideBar);