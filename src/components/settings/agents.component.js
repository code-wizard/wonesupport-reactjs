import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { WoneInnerMain } from '../common';
import CreateAgent from './create-agent.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchAllAgent } from  '../../redux/fetch-agent/fetch-agent.action';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../spinner/spinner.component';
import './agents.styles.scss';

class Agents extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isAddAgent: false,
          searchField: '',
          value: 'filter by departments',
      }
    }

    componentDidMount() {
        this.props.fetchAllAgent('')
    }

    handleFilter = (e) => {
      this.setState({value: e.target.value}, 
        () => { 
          this.props.fetchAllAgent('', this.state.value)
        })
    }

    handleTextChange = (e) => {
      this.setState({searchField: e.target.value}, 
        () => this.props.fetchAllAgent(this.state.searchField))
    }

    submitSearch = (e) => {
      e.preventDefault();
      const { searchField } = this.state;
      this.props.fetchAllAgent(searchField);
    }
    

    toggleCreate = () => {
      this.setState({isAddAgent: !this.state.isAddAgent})
    }

    render() {
      const { isAddAgent, searchField } = this.state;
      const { agent, isSuccessful } = this.props;
      // console.log(agent.results && agent.results, 'agent data uchenna ibe')
      return (
        // Agents Listing
        <WoneInnerMain>
          {isAddAgent && <CreateAgent close={this.toggleCreate} />}
          {!isAddAgent &&
            <Fragment>
            {isSuccessful ?
            <div>
            <article>
            <div className="col-sm-12 col-md-12 col-lg-12 p-0 flex-content">
              <span className="page-title">Agents</span>
              <button className="btn agent-btn wone_medium" onClick={this.toggleCreate}>New Agent</button>
            </div>
          </article>
          <article className="border-bottom">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 search__counter">
                <div className="form-inline">
                  <div className="form-group">
                    <input type="search" 
                      className="form-control"
                        name="search"
                        placeholder="Search" 
                        value={searchField}
                        onChange={this.handleTextChange}
                       />
                      <button 
                        type="submit" 
                        className="btn agent-btn wone_medium"
                        onClick={this.submitSearch}>Search</button>
                  </div>
                </div>
                <div className="dept_counter">
                  {/* <p>0 enabled / Unlimited Department</p> */}
                </div>
                <div className="form-group m-0">
                  <select className="form-control select-type" 
                    value={this.state.value} 
                    onChange={this.handleFilter}>
                    <option value="filter by departments">Filter by Departments</option>
                    <option value="department">Department</option>
                    <option value="name">Name</option>
                  </select>
                </div>
              </div>
            </div>
          </article>

          <article>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <table className="table wone__table no-bg">
                  <thead>
                    <tr>
                      <th scope="colform-check">
                        <input className="form-check-input" type="checkbox" />
                      </th>
                      <th scope="col">Display Name</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Support Group</th>
                      <th scope="col">Role</th>
                      <th scope="col">Enabled</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        agent.results && agent.results.map(result => (
                            <tr key={result.name}>
                              <th scope="row form-check">
                                <input className="form-check-input" type="checkbox" />
                                  <span className={`status ${result.status === 'active' ? 'online': ''}`}>
                                  </span>
                              </th>
                              <td>{result.name && result.name}</td>
                              <td>{result.full_name && result.full_name}</td>
                              <td>{result.email && result.email}</td>
                              <td>Support@wonesupport.com</td>
                              <td>{result.role && result.role}</td>
                              <td>
                                { result.is_active && result.is_active ?
                                  <span>
                                    <FontAwesomeIcon icon={faCheck} />
                                  </span>
                                  :null
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
    agent: state.fetchAgent.agent,
    isSuccessful: state.fetchAgent.isSuccessful
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllAgent: (searchField, ordering) => {
      dispatch(fetchAllAgent(searchField, ordering))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Agents);