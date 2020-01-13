import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WoneInnerMain } from '../common';
import './agents.styles.scss';
import { TabContainer, TabContent, Col, Nav, NavItem, Row, TabPane } from 'react-bootstrap';

class Account extends Component {
    state = {
        value: 'choose'
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
    
    render() {
        return(
            <WoneInnerMain>
                <section className="col-sm-12 col-md-12 col-lg-12">
                    <span className="page-title">Account</span>
                </section>
                {/* Tabs Section */}    
                <section class="col-sm-12 col-md-12 col-lg-12">
                    <TabContainer id="left-tabs-example" defaultActiveKey="info">
                        <Row>
                            <Col sm={12} lg={12} md={12}>
                                <Nav variant="pills" className="nav wone__content-nav-tab">
                                    <NavItem>
                                        <Nav.Link eventKey="info" className="nav-link">Info</Nav.Link>
                                    </NavItem>
                                    <NavItem>
                                        <Nav.Link eventKey="branding" className="nav-link">Branding</Nav.Link>
                                    </NavItem>
                                    <NavItem>
                                        <Nav.Link eventKey="localization" className="nav-link">Localization</Nav.Link>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col sm={12} lg={12} md={12}>
                            <TabContent>
                                <TabPane eventKey="info">
                                    <section className="wone__tabs-contents">
                                        <article>
                                            <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                                            <span className="page-title">Company Information</span>
                                            </div>
                                        </article>
                                        <article>
                                            <div className="row">
                                            <div className="col-sm-12 col-md-3 col-lg-3">
                                                <label htmlFor="agent-name">Company name</label>
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
                                                <label htmlFor="address">Address</label>
                                            </div>
                                            <div className="col-sm-12 col-md-9 col-lg-9">
                                                <div className="form-group">
                                                    <input type="text" id="address" className="form-control" />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-3 col-lg-3">
                                                    <label htmlFor="city">City</label>
                                                </div>
                                                <div className="col-sm-12 col-md-9 col-lg-9">
                                                    <div className="form-group">
                                                        <select className="form-control" 
                                                                // value={this.state.value} 
                                                                // onChange={this.handleChange}
                                                                >
                                                            <option value="choose">Choose...</option>
                                                            <option value="distributor">City</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-3 col-lg-3">
                                                    <label htmlFor="city">State</label>
                                                </div>
                                                <div className="col-sm-12 col-md-9 col-lg-9">
                                                    <div className="form-group">
                                                        <select className="form-control" 
                                                                // value={this.state.value} 
                                                                // onChange={this.handleChange}
                                                                >
                                                            <option value="choose">Choose...</option>
                                                            <option value="distributor">State</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-3 col-lg-3">
                                                    <label htmlFor="city">Country</label>
                                                </div>
                                                <div className="col-sm-12 col-md-9 col-lg-9">
                                                    <div className="form-group">
                                                        <select className="form-control" 
                                                                // value={this.state.value} 
                                                                // onChange={this.handleChange}
                                                                >
                                                            <option value="choose">Choose...</option>
                                                            <option value="distributor">Country</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="row">
                                            <div className="col-sm-12 col-md-12 col-lg-12 btn-pad">
                                            <button className="btn agent-btn tab-btn">Save</button>
                                            <button className="btn agent-btn white-btn" 
                                                id="close-form">
                                                    Cancel
                                            </button>
                                            </div>
                                        </article>
                                    </section>
                                </TabPane>
                                <TabPane eventKey="branding">
                                    <section className="wone__tabs-contents">
                                        <article className="row">
                                            <div className="col-sm-12 col-md-3 col-lg-3">
                                                <h5>Header logo</h5>
                                            </div>
                                            <div className="col-sm-12 col-md-9 col-lg-9">
                                            <div className="form-group">
                                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                            </div>
                                            <p>This logo appears on the left side of your wonesupport . Add a logo that will fit with 240px wide
                                                by 50px tall. The logo background should be transparent or match the header background color
                                                you chose</p>
                                            </div>
                                        </article>
                                        <article className="row">
                                            <div className="col-sm-12 col-md-3 col-lg-3">
                                                <h5>Header logo</h5>
                                            </div>
                                            <div className="col-sm-12 col-md-9 col-lg-9">
                                                <div className="form-group row">
                                                    <label htmlFor="brand-color" className="col-sm-2 col-form-label">Brand color</label>
                                                    <div className="col-sm-10">
                                                        <input type="color" className="form-control color-input" id="brand-color" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="background-color" className="col-sm-2 col-form-label">Page background</label>
                                                    <div className="col-sm-10">
                                                        <input type="color" className="form-control color-input" id="background-color" />
                                                    </div>
                                                </div>
                                                <p>Click to select the color or enter a hex value</p>
                                                <p>Your agent interface will use the page header color to customize colors. </p>
                                                <p>Preview selected color</p>
                                                <p>Revert to default colors</p>
                                            </div>
                                        </article>
                                        <article className="row">
                                            <div className="col-sm-12 col-md-3 col-lg-3">
                                                <h5>Your Wonesupport account name</h5>
                                            </div>
                                            <div className="col-sm-12 col-md-9 col-lg-9">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Company’s name" />
                                                </div>
                                                <p>The name of your company. It appears in emailnotifications.</p>
                                            </div>
                                        </article>
                                    </section>
                                </TabPane>

                                <TabPane eventKey="localization">
                                <section className="wone__tabs-contents">
                                    <article className="row">
                                    <div class="col-sm-12 m-b-20">
                                    <p>Localization options enable you to set your time zone and language settings. <Link to="/">Learn more</Link></p>
                                    </div>
                                    <div class="col-sm-12 col-md-3 col-lg-3">
                                    <h5>Time zone</h5>
                                    </div>
                                    <div className="col-sm-12 col-md-9 col-lg-9">
                                    <div className="form-group">
                                        <select className="form-control select-type">
                                        <option>Choose...</option>
                                        <option  selected>(GMT - 04:00) Eastern Time (US $ Canada)</option>
                                        </select>
                                    </div>
                                    <p>By selecting the time zone of your wonesupport account, you’ll see timestamps relative to time
                                        zone of your own country or locations. For example , you’ll see when Help Center were posted,
                                        or when complaints were submitted relative to your own time zone.
                                        </p>
                                    </div>
                                </article>
                                <article className="row">
                                    <div className="col-sm-12 col-md-3 col-lg-3">
                                    <h5>Time format</h5>
                                    </div>
                                    <div className="col-sm-12 col-md-9 col-lg-9">
                                    <div className="form-group">
                                        <select className="form-control select-type">
                                        <option>Choose...</option>
                                        <option  selected>24 hour clock (22:42)</option>
                                        </select>
                                    </div>
                                    <p>Selecting the 12 or 24-hour time format for your wonesupport.</p>
                                    </div>
                                </article>
                                    <article className="row">
                                        <div className="col-sm-12 col-md-3 col-lg-3">
                                        <h5>Language</h5>
                                        </div>
                                        <div className="col-sm-12 col-md-9 col-lg-9">
                                            <div className="form-group">
                                                <select className="form-control select-type">
                                                <option>Choose...</option>
                                                <option>Arabic</option>
                                                <option selected>English</option>
                                                <option>French</option>
                                                <option>Spanish</option>
                                                <option>Yoruba</option>
                                                <option>Igbo</option>
                                                </select>
                                            </div>
                                            <p>Selecting the 12 or 24-hour time format for your wonesupport.</p>
                                        </div>
                                    </article>
                                    <article className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 btn-pad">
                                            <button className="btn agent-btn tab-btn">Save</button>
                                            <button className="btn agent-btn white-btn">Cancel</button>
                                        </div>
                                    </article>     
                                </section>
                                </TabPane>
                            </TabContent>
                            </Col>
                        </Row>
                    </TabContainer>
                </section>

            </WoneInnerMain>
        )
    }
}

export default Account;
