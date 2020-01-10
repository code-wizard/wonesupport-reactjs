import React, {Component} from 'react';
import { ContentWrapper } from '../../components/common/index';
import ReportSidePanel from '../../components/report/report-side-panel.component';
import ReportContentView from '../../components/report/report-content-view.component';


class Reports extends Component {
    render() {
        return(
          <ContentWrapper>
            <ReportSidePanel />
            <ReportContentView />
          </ContentWrapper>
        )
    }
}

export default Reports;