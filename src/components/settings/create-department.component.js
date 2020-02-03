import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik } from 'formik'
import * as Yup from 'yup';
import Select from 'react-select'
import './agents.styles.scss';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


const DepartmentSchema = Yup.object().shape({
  email: Yup.string()
      .email('please provide a valid email')
      .required('email cannot be empty'),
  first_name: Yup.string()
      .min(2, 'name is too short')
      .max(50, 'name is too long')
      .required('please provide first name'),
  last_name: Yup.string()
      .min(2, 'name is too short')
      .max(50, 'name is too long')
      .required('please provide last name'),
  phone: Yup.string()
      .required('please provide phone number'),
  password1: Yup.string()
      .min(8, 'password must be atleast 8 characters')
      .required('please provide password'),
  short_description: Yup.string()
      .required('please provide description'),
  role: Yup.string()
      .required('please provide role'),
  department: Yup.string()
      .required('please provide department'),
  support_group_id: Yup.string()
      .required('please provide support group')
})  

class CreateDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          selectedOption: 'enabled',
          selectedSupport: null,
       }
    } 
    optionChangeHandler = (event) => {
        this.setState({ selectedOption: event.target.value })
    }

    handleChange = selectedSupport => {
      this.setState(
        { selectedSupport },
        () => console.log(`Option selected:`, this.state.selectedSupport)
      );
    };

    render() {
      const { selectedSupport } = this.state;
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
                      <input type="text" className="form-control" placeholder="Department’s name" />
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
                    <h5>Support Channels</h5>
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-9">
                    <div className="form-group">
                      <Select 
                        value={selectedSupport}
                        onChange={this.handleChange}
                        className="react-select"
                        classNamePrefix="react-select"
                        options={options}
                        isMulti
                        placeholder="Support Channels"
                      />
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