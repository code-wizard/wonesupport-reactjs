import React, { Component } from 'react';
import { ContentWrapper } from '../../components/common'
import SettingSidePanel from '../../components/billing/setting-side-panel.component';
import SettingContentView from '../../components/billing/setting-content-view.component';

class Settings extends Component {
    render() {
        return(
          <ContentWrapper>
              <SettingSidePanel />
              <SettingContentView />
          </ContentWrapper>
        )
    }
}

export default Settings;