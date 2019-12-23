import React, { Component } from 'react';
import { WoneContView, WoneInnerHeader, NewUserBtn, WoneInnerMain } from '../common';
import AdminCallView from '../admin-call-view/admin-call-view.component';
import CustomerCallView from '../customer-call-view/customer-call-view.component';
import './user-cont-view.styles.scss';


class UserContentView extends Component {
    render() {
        return(
          <WoneContView>
            <WoneInnerHeader flexEnd>
                <NewUserBtn />
            </WoneInnerHeader> 
            <WoneInnerMain>
              <div className="col-sm-12 col-md-12 col-lg-12 p-0 mb-5">
                <h6 className="page-title">Chat</h6>
                <p>Chatting is easy with wonesupport just set up you web widget and make sure that your typing fingers are warmed up.</p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 view__display">
                <AdminCallView />
                <CustomerCallView />
              </div>
            </WoneInnerMain>
          </WoneContView>
        )
    }
}

export default UserContentView;