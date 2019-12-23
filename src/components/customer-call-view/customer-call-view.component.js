import React, { Component } from 'react';
import './customer-call-view.styles.scss';

class CustomerCallView extends Component {
    render() {
        return(
          <div className="customer-view">
            <p>What customer see</p>
            <img src={require("../../assets/img/icons/customer-view.svg")} alt="view-customer" />
          </div>
        )
    }
}

export default CustomerCallView;