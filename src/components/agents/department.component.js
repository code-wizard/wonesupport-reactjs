import React, { Component, Fragment } from 'react';
import { WoneInnerMain } from '../common';
import  CreateDepartment from '../agents/create-department.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './agents.styles.scss';

class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNewDept: false
        }
    }
    toggleCreateHandler = () => {
        this.setState({isNewDept: !this.state.isNewDept})
    }

    render() {
        const { isNewDept } = this.state
        return(
            // Create Department
            <WoneInnerMain>
                {isNewDept && <CreateDepartment cancelHandler={this.toggleCreateHandler} />}
                {!isNewDept &&
                <Fragment>
                    <article>
                        <div className="col-sm-12 col-md-12 col-lg-12 p-0 flex-content">
                            <span className="page-title">Department</span>
                            <button className="btn agent-btn wone_medium" onClick={this.toggleCreateHandler}>New Dept</button>
                        </div>
                    </article>
                    <article className="border-bottom">
                        <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 search__counter">
                            <div className="form-inline">
                            <div className="form-group">
                                <input type="search" 
                                className="form-control"
                                placeholder="Search" />
                                <button type="submit" className="btn agent-btn wone_medium">Add Department</button>
                            </div>
                            </div>
                            <div className="dept_counter">
                                <p>0 enabled / Unlimited Department</p>
                            </div>
                        </div>
                        </div>
                    </article>
                    <article>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                        <table className="table wone__table">
                            <thead>
                            <tr>
                                <th scope="colform-check">
                                <input className="form-check-input" type="checkbox" />
                                </th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Agents</th>
                                <th scope="col">Enabled</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-color">
                                <th scope="row form-check">
                                <input className="form-check-input" type="checkbox" />
                                </th>
                                <td>Developer</td>
                                <td>Developer</td>
                                <td>Amaefula Ebuka</td>
                                <td><span><FontAwesomeIcon icon={faCheck} /></span></td>
                            </tr>
                            <tr className="bg-color">
                                <th scope="row form-check">
                                <input className="form-check-input" type="checkbox" />
                                </th>
                                <td>Human Resource</td>
                                <td>Sales/Marketing</td>
                                <td>Abdul Salaudeen</td>
                                <td><span><FontAwesomeIcon icon={faCheck} /></span></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </article>
                </Fragment>}
            </WoneInnerMain>
        )
    }
}

export default Department;