import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { WoneContView, WoneInnerHeader } from '../common';
import CompanyProfile from '../company-profile.component';
import PaymentReference from '../payment-reference.component'


const BillingContentView = ({ match }) => {
    return(
        <WoneContView>
            <WoneInnerHeader>
                <CompanyProfile />
            </WoneInnerHeader>
            <Switch>
                <Redirect exact from={`${match.path}/`} to={`${match.path}/payment-reference`} />
                <Route path={`${match.path}/payment-reference`} component={PaymentReference} />
            </Switch>
        </WoneContView>
    )
}

export default withRouter(BillingContentView);