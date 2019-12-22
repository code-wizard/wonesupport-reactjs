import React, {Component} from 'react';
import './content-view.styles.scss';
import { WoneContView, WoneInnerHeader, NewUserBtn, WoneInnerMain } from '../common';
import CompanyProfile from '../company-profile.component';



class ContentView extends Component {
    render() {
        return(
            <WoneContView>
                <WoneInnerHeader>
                    <CompanyProfile />
                    <NewUserBtn />
                </WoneInnerHeader>
                <WoneInnerMain>
                    <h6 className="page-title">Admin Dashboard Index</h6>
                    <p>Pannel Space</p>
                </WoneInnerMain>
            </WoneContView>
        )
    }
}

export default ContentView;