import React, { Component, Fragment } from 'react';
import { WoneInnerMain } from '../common';
import CreateAgent from './create-agent.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './agents.styles.scss';

class Agents extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isAddAgent: false,
          value: 'filter by departments'
      }
    }

    handleChange = (event) => {
      this.setState({value: event.target.value})
    }

    toggleCreate = () => {
      this.setState({isAddAgent: !this.state.isAddAgent})
    }

    render() {
      const { isAddAgent } = this.state
      return (
        // Agents Listing
        <WoneInnerMain>
          {isAddAgent && <CreateAgent close={this.toggleCreate} />}
          {!isAddAgent &&
          <Fragment>
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
                      placeholder="Search" />
                      <button type="submit" className="btn agent-btn wone_medium">Add Agent</button>
                  </div>
                </div>
                <div className="dept_counter">
                  <p>0 enabled / Unlimited Department</p>
                </div>
                <div className="form-group m-0">
                  <select className="form-control select-type" 
                    value={this.state.value} 
                    onChange={this.handleChange}>
                    <option value="filter by departments">Filter by Departments</option>
                    <option value="distributor">Distributor</option>
                    <option value="sales">Sales</option>
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
                      <th scope="col">Support Email</th>
                      <th scope="col">Role</th>
                      <th scope="col">Enabled</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row form-check">
                        <input className="form-check-input" type="checkbox" />
                        <span className="status online"></span>
                      </th>
                      <td>Fabio</td>
                      <td>Monsur Ollan</td>
                      <td>Fabio@gmail.com</td>
                      <td>Support@wonesupport.com</td>
                      <td>Administrative</td>
                      <td><span><FontAwesomeIcon icon={faCheck} /></span></td>
                    </tr>
                    <tr>
                      <th scope="row form-check">
                        <input className="form-check-input" type="checkbox" />
                        <span className="status"></span>
                      </th>
                      <td>Ebuka</td>
                      <td>Amaefula Ebuka</td>
                      <td>Ebuka@gmail.com</td>
                      <td>Support@wonesupport.com</td>
                      <td>Developer</td>
                      <td><span><FontAwesomeIcon icon={faCheck} /></span></td>
                    </tr>
                    <tr>
                      <th scope="row form-check">
                        <input className="form-check-input" type="checkbox" />
                        <span className="status"></span>
                      </th>
                      <td>Abdul</td>
                      <td>Abdul Salaudeen</td>
                      <td>Abdul@gmail.com</td>
                      <td>Support@wonesupport.com</td>
                      <td>Administrative</td>
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

export default Agents;