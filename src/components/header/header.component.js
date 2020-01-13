import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";
import { Link, withRouter } from 'react-router-dom';
import './header.styles.scss';
import SearchInput from '../search-input/search-input.component';
import Profile from '../../assets/img/users/user3.jpg';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';


class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        toggleDropdown: false
      }
    }

    handleClickOutside = ()=> {
      this.setState({
        toggleDropdown: false
      })
    }

    toggleOffDropdown = () => { 
      this.setState({
        toggleDropdown: !this.state.toggleDropdown
      })
    }
    
    render() {
      const { toggleDropdown } = this.state;
      return(
        <header className="wone-main-header">
          <nav className="navbar navbar-expand-lg">
            <span className="wone-toggle-menu" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
              <span className="-icon">
                <i className="menu-icon"></i>
              </span>
            </span>
            <Link className="navbar-band" to="/">
              <span>{'Home'}</span>
            </Link>
            <div className="wone-inner-wrapper">
              <div className="search-container">
                <div className="input-group">
                  <span className="-icon">
                    <i className="search-icon"></i>
                  </span>
                  <SearchInput 
                    className="search-input-style" 
                    type="search" 
                    placeholder="Search Here" />
                </div>
              </div>
              <div className="collapse navbar-collapse right">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link bell-icon" to="#">
                      <FontAwesomeIcon icon={faBell} size="lg" />
                      <span className="square-8 bg-danger pos-absolute t-15 r-0 rounded-circle"></span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                    </Link>
                  </li>
                  <li className="nav-item dropdown" onClick={this.toggleOffDropdown}>
                    <Link className="nav-link dropdown-toggle" to="#">
                      <div className="profile-wrapper">
                        <span>Olawale Jimoh</span>
                        <span className="profile-img">
                          <i className="img-placer">
                            <img className="mr-3" src={Profile} alt="Generic" />
                          </i>
                        </span>
                      </div>
                    </Link>
                    {toggleDropdown && <DropdownMenu className="dropdown-menu" />}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      )
    }
}

export default withRouter(onClickOutside(Header));

