import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './agents.styles.scss';

class CreateDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedOption: 'enabled' }
    } 
    optionChangeHandler = (event) => {
        this.setState({ selectedOption: event.target.value })
    }
    render() {
        return(
            // Create Department
           <Fragment>
               <article>
                <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                  <span className="page-title">Create department</span>
                </div>
              </article>
              <article className="add-border-line">
                <div className="row">
                  <div className="col-sm-12 col-md-3 col-lg-3">
                    <h5>Departments Status</h5>
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-9">
                    <div className="wone_radio-group">
                      <label className="wone_radio enabled">
                        <input type="radio" 
                            value="enabled" 
                            checked={this.state.selectedOption === 'enabled'} 
                            onChange={this.optionChangeHandler}
                            name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="wone_radio disabled">
                        <input type="radio" 
                            value="disabled"
                            checked={this.state.selectedOption === 'disabled'}
                            onChange={this.optionChangeHandler}
                            name="radio" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="row">
                  <div className="col-sm-12 col-md-3 col-lg-3">
                    <h5>Name</h5>
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-9">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Company’s name" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-3 col-lg-3">
                    <h5>Description</h5>
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-9">
                    <div className="form-group">
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-3 col-lg-3">
                    <h5>Department Agents</h5>
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-9">
                    <div className="form-group wone__bb-style">
                      <p>No Agents yet</p>
                    </div>
                    <ul className="agent_listing">
                      <li><span><FontAwesomeIcon icon={faPlus} /></span> Fullname</li>
                      <li><span><FontAwesomeIcon icon={faPlus} /></span> Fullname</li>
                      <li><span><FontAwesomeIcon icon={faPlus} /></span> Fullname</li>
                      <li><span><FontAwesomeIcon icon={faPlus} /></span> Fullname</li>
                      <li><span><FontAwesomeIcon icon={faPlus} /></span> Fullname</li>
                      <li><span><FontAwesomeIcon icon={faPlus} /></span> Fullname</li>
                      <li><span><FontAwesomeIcon icon={faPlus} /></span> Fullname</li>
                      <li><span><FontAwesomeIcon icon={faPlus} /></span> Fullname</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 btn-pad">
                  <button className="btn agent-btn tab-btn">Create Department</button>
                  <button className="btn agent-btn white-btn" id="close-form" onClick={this.props.cancelHandler}>Cancel</button>
                </div>
              </article>
           </Fragment> 
        )
    }
}

export default CreateDepartment;