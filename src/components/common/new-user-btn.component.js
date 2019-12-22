import React, { Component } from 'react';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import './common.styles.scss';

class NewUserBtn extends Component {
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
                        />
                        }
                </div>
            </div>
        )
    }
}

export { NewUserBtn };