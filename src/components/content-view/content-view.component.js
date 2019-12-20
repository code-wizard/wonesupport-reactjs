import React, {Component} from 'react';
import './content-view.styles.scss';
import BrandLogo from '../../assets/img/customers/mtn.png' 
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';



class ContentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleDropDown: false
        }
    }

    toggleUserLead = () => {
        this.setState({ toggleDropDown: !this.state.toggleDropDown })
    }
    
    render() {
        const { toggleDropDown } = this.state
        return(
            <div className="wone-content-view">
                <header className="wone-inner-header">
                    <div className="profile-tag">
                        <span className="tag-img">
                            <img src={BrandLogo} alt="profile" />
                        </span>
                        <h3>MTN NIGERIA</h3>
                    </div>
                    <div className="add-user">
                      <div className="nav-item dropdown" onClick={this.toggleUserLead}>
                          <button className="wone-btn">
                              New User or Lead
                          </button>
                          {toggleDropDown && 
                            <DropdownMenu 
                                className="custom-dropdown" 
                                borderLine
                                newUser
                            />}
                      </div>
                    </div>
                </header>
                <div className="wone-inner-main">
                    <div className="wone-tab-content">
                        <article>
                            <div className="col-sm-12 col-md-12 col-lg-12 p-0 mb-5">
                                <h6 className="page-title">Admin Dashboard Index</h6>
                                <p>Pannel Space</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentView;