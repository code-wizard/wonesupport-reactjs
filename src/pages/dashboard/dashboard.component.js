import React, {Component} from 'react';
import { ContentWrapper } from '../../components/common/index';
// import HomeSidePanel from '../../components/home-side-panel/home-side-panel.component';
import ContentView from '../../components/content-view/content-view.component';


class Dashboard extends Component {
    render() {
        return(
          <ContentWrapper>
            {/* <HomeSidePanel /> */}
            <ContentView />
          </ContentWrapper>
        )
    }
}

export default Dashboard;