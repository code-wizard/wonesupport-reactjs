import React, { Component } from 'react';
import { ContentWrapper } from '../../components/common'
import BillingSidePanel from '../../components/billing/billing-side-panel.component';
import BillingContentView from '../../components/billing/billing-content-view.component';

class Billing extends Component {
    render() {
        return(
          <ContentWrapper>
              <BillingSidePanel />
              <BillingContentView />
          </ContentWrapper>
        )
    }
}

export default Billing;