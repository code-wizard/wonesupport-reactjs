import React, {Component} from 'react';
import './sidebar.styles.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/wone-logo.svg'

class SideBar extends Component {
    render() {
       return(
        <div className="wone-sidebar">
           <div className="wone-logo">
              <Link to="/home">
                  <img src={Logo} alt="wone-support-logo" />
              </Link>
           </div> 
           <ul>
            <li>
              <Link to="/home">
                  <span className="-icon">
                      <i className="home-icon"></i>
                  </span>
                  <span className="menu-title">
                      Home
                  </span>
              </Link>
            </li>
            <li>
              <Link to="/all Users">
                  <span className="-icon">
                      <i className="users-icon"></i>
                  </span>
                  <span className="menu-title">
                      All Users
                  </span>
              </Link>
            </li>
            <li>
              <Link to="/">
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
              <Link to="/">
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

export default SideBar;