import React, { Component } from 'react';
import { ContentWrapper } from '../../components/common';
import UsersSidePanel from '../../components/users-side-panel/users-side-panel.component';
import UserContentView from '../../components/user-content-view/user-cont-view.component'



class Users extends Component {
    render() {
        return(
            <ContentWrapper>
                <UsersSidePanel />
                <UserContentView />
            </ContentWrapper>
        )
    }
}

export default Users;