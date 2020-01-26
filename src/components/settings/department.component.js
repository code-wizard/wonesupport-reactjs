import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { WoneInnerMain } from '../common';
import  CreateDepartment from '../settings/create-department.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './agents.styles.scss';

// actions 
import { fetchAllDepartment } from '../../redux/fetch-department/fetch-department.action'
import Spinner from '../spinner/spinner.component';

class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNewDept: false
        }
    }

    componentDidMount() {
        this.props.fetchAllDepartment('')
    }

    toggleCreateHandler = () => {
        this.setState({isNewDept: !this.state.isNewDept})
    }



    render() {
        const { isNewDept } = this.state
        const { isSuccessful, department } = this.props;
        return(
            // Create Department
            <WoneInnerMain>
                {isNewDept && <CreateDepartment cancelHandler={this.toggleCreateHandler} />}
                {!isNewDept &&
                <Fragment>
                {isSuccessful ?
                    <div>
                    <article>
                        <div className="col-sm-12 col-md-12 col-lg-12 p-0 flex-content">
                            <span className="page-title">Department</span>
                            <button className="btn agent-btn wone_medium" onClick={this.toggleCreateHandler}>New Department</button>
                        </div>
                    </article>
                    <article className="border-bottom">
                        <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 search__counter">
                            <form className="form-inline">
                                <div className="form-group">
                                    <input type="search" className="form-control" placeholder="Search" />
                                    <button type="submit" className="btn agent-btn wone_medium">Search</button>
                                </div>
                            </form>
                            <div className="dept_counter">
                                {/* <p>0 enabled / Unlimited Department</p> */}
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
                                {/* <th scope="col">Agents</th> */}
                                <th scope="col">Enabled</th>
                            </tr>
                            </thead>
                            <tbody>
                            { 
                                department.results && department.results.map( result => (
                                    <tr className="bg-color" key={result.name && result.name}>
                                        <th scope="row form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        </th>
                                        <td>{result.name && result.name}</td>
                                        <td>{result.short_description && result.short_description}</td>
                                        {/* <td>Amaefula Ebuka</td> */}
                                        <td>
                                            {
                                                result.department_status && result.department_status === 'enable' ?
                                                <span>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                :
                                                null
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </article>
                </div>: <Spinner />}
                </Fragment>}
            </WoneInnerMain>
        )
    }
}

const mapStateToProps = state => {
    return {
        department: state.fetchDepartment.department,
        isSuccessful: state.fetchDepartment.isSuccessful
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDepartment: (searchField, ordering) => {
          dispatch(fetchAllDepartment(searchField, ordering))
        }
      }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Department);