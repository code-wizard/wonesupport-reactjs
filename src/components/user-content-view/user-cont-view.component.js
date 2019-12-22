import React, { Component } from 'react';
import { WoneContView, WoneInnerHeader, NewUserBtn, WoneInnerMain } from '../common';
import './user-cont-view.styles.scss'


class UserContentView extends Component {
    render() {
        return(
          <WoneContView>
            <WoneInnerHeader flexEnd>
                <NewUserBtn />
            </WoneInnerHeader> 
            <WoneInnerMain>
              <h6 className="page-title">Chat</h6>
              <p>Chatting is easy with wonesupport just set up you web widget and make sure that your typing fingers are warmed up.</p>
              <div className="col-sm-12 col-md-12 col-lg-12 view__display">
                
              </div>
            </WoneInnerMain>
          </WoneContView>
        )
    }
}

export default UserContentView;