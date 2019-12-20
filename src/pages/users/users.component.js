import React, { Component } from 'react';
import { ContentWrapper } from '../../components/common';
import UsersSidePanel from '../../components/users-side-panel/users-side-panel.component'



class Users extends Component {
    render() {
        return(
            <ContentWrapper>
                <UsersSidePanel />
            </ContentWrapper>
        )
    }
}

export default Users;