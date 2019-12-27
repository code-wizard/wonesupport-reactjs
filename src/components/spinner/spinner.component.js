import React, { Component } from 'react';

export class Spinner extends Component {
  render() {
    return (
      <div className="main-spinner-wrapper">
        <div>
          <div className="donut"></div>
        </div>
      </div>
    )
  }
}

export default Spinner;