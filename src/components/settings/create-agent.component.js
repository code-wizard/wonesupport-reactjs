import React, { Component, Fragment } from 'react';
import './agents.styles.scss';

class CreateAgent extends Component {
    state = {
        value: 'choose'
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        return(
            // Create Department
            <Fragment>
                <article>
                    <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                    <span className="page-title">Add Agent</span>
                    </div>
                </article>
                <article>
                    <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <label htmlFor="agent-name">Name</label>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="form-group">
                        <input type="text" id="agent-name" className="form-control" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <label htmlFor="agent-description">Description</label>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="form-group">
                        <textarea className="form-control" id="agent-description" rows="3"></textarea>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <label htmlFor="agent-name">Role</label>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="form-group">
                        <select className="form-control" 
                                value={this.state.value} 
                                onChange={this.handleChange}>
                            <option value="choose">Choose...</option>
                            <option value="distributor">Distributor</option>
                            <option value="sales">Sales</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </article>
                <article className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 btn-pad">
                    <button className="btn agent-btn tab-btn">Add Agent</button>
                    <button className="btn agent-btn white-btn" 
                        id="close-form" 
                        onClick={this.props.close}>
                            Cancel
                    </button>
                    </div>
                </article>
            </Fragment>
        )
    }
}

export default CreateAgent;