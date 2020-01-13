import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { WoneInnerMain } from './common';
import { Modal, ModalBody } from 'react-bootstrap';
import './subscriptions.styles.scss';



class Subscriptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setShow: false,
            isHidden: false,
            toggleCoupon: false
        }
    }
    handleClose = () => {
        this.setState({
            setShow: false
        })
    }
    handleShow = () => {
        this.setState({
            setShow: true
        })
    }
    toggleCouponHandler = () => {
        this.setState({
            toggleCoupon: !this.state.toggleCoupon
        })
    }
    // toggleHidden = () => {
    //     this.setState({
    //         isHidden: !this.state.isHidden
    //     })
    // }
    render() {
        // const { isHidden, toggleCoupon } = this.state;
        return(
            <WoneInnerMain>
                <section className="col-sm-12 col-md-12 col-lg-12">
                    <span className="page-title">Account</span>
                </section>

                {/* <!-- Details Section Section --> */}
                <section className="col-sm-12 col-md-12 col-lg-12">
                    <div className="payment__type-table wone__tab-content">
                    <div className="purchase_panel medium_view">
                        <article>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Card</th>
                                <th scope="col">Expires</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Master card ending in 5989</td>
                                <td>July 2020</td>
                                <td>
                                <Link to="#" className="update_card" onClick={this.handleShow}>Update card</Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </article>
                    </div>
                    <div className="purchase_panel" id="purchase_panel">
                        <article>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Plan</th>
                                <th scope="col"></th>
                                <th scope="col">No. of agent</th>
                                <th scope="col"></th>
                                <th scope="col">Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                <div className="form-group">
                                    <select className="form-control select-type">
                                    <option>Choose...</option>
                                    <option selected>Monthly</option>
                                    <option>Quarterly</option>
                                    <option>Annually</option>
                                    </select>
                                </div>
                                </td>
                                <td><span style={{width: '50px', display: 'block'}}></span></td>
                                <td>
                                <div className="form-group">
                                    <select class="form-control select-type">
                                    <option>Choose...</option>
                                    <option selected>1</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    </select>
                                </div>
                                </td>
                                <td><span style={{width: '50px', display: 'block'}}></span></td>
                                <td>$4.5</td>
                            </tr>
                            <tr className="wone__total">
                                <td colspan="4">total cost</td>
                                <td>$22.5</td>
                            </tr>
                            </tbody>
                        </table>
                        </article>
                        <article>
                        <div className="wone__bottom-section">
                            <button className="btn agent-btn wone_medium" id="purchase">Save</button>
                            <p>Cancel product subscriptions or account. <br />
                            Remove product from your current subscription or cancel your account.
                            </p>
                            <Link to="#">Go to cancellations</Link>
                        </div>
                        </article>
                    </div>
                    {/* {isHidden && <div className="payment_panel medium_view" id="payment_panel">
                        <article>
                        <h6>Coupon</h6>
                        <button className="btn agent-btn wone_medium gray" id="add_coupon" onClick={this.toggleCouponHandler}>Add coupon</button>
                        {toggleCoupon && <div className="form-group coupon_input animated fadeIn">
                            <input type="text" className="form-control" placeholder="Enter coupon" />
                        </div>}
                        <hr />
                        <div className="wone__pay-invoice">
                            <h5>INVOICE</h5>
                            <div class="address">
                            <h6>Company name</h6>
                            <p><b>MTN Nigeria</b></p>
                            <Link to="#">Edit company name</Link>
                            </div>
                            <div class="address">
                            <h6>Billing email</h6>
                            <p>knny@wonesupport.com</p>
                            <Link to="#">Edit company name</Link>
                            </div>
                        </div>
                        <div className="wone__bottom-section text-right">
                            <button className="btn agent-btn white-btn wone_medium white" id="cancel_purchase" onClick={this.toggleHidden}>Back</button>
                        </div>
                        </article>
                    </div>} */}
                    </div>
                </section>
                <Modal dialogClassName={"section"} show={this.state.setShow} onHide={this.handleClose} centered>
                    <ModalBody>
                        <div class="modal-logo">
                            <img src={require("../assets/img/wonesupport-logo.svg")} alt="wone-support-logo" />
                        </div>
                        <div className="form-content">
                            <div className="header-content">
                            {/* <!-- <h6>Update Purchase Card</h6> --> */}
                            </div>
                            <div class="form-wrapper">
                                <div class="wone__tab-content">
                                <article>
                                    <form>
                                        <div className="card__master">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                {/* <!-- <label>Card number</label> --> */}
                                                <input type="text" className="form-control" autofocus placeholder="XXXX XXXX XXXX XXXX" />
                                            </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-4">
                                            <div className="form-group">
                                                {/* <!-- <label>Expiry date</label> --> */}
                                                <input type="text" className="form-control" placeholder="MM/YY" />
                                            </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-4">
                                            <div className="form-group">
                                                {/* <!-- <label>CVV</label> --> */}
                                                <input type="password" className="form-control" placeholder="CVV" />
                                                <span className="toolTip">
                                                <span className="info_q animate fadeIn"><i>?</i>
                                                    <span className="info">
                                                    <b>CVV</b> <br />
                                                    <span>This is the 3 digit at the back of your card</span>
                                                    </span>
                                                </span>
                                                </span>
                                            </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                {/* <!-- <label>Card Holder</label> --> */}
                                                <input type="text" className="form-control" placeholder="CARD HOLDER" />
                                            </div>
                                            </div>
                                        </div>
                                        <span className="-icon master">
                                            <i className="mastercard-icon"></i>
                                        </span>
                                        </div>
                                    </form>
                                </article>
                                </div>  
                            </div>
                        </div>
                    </ModalBody>
                    <button type="button" className="et_close-btn" onClick={this.handleClose}>x</button>
                </Modal>
            </WoneInnerMain>
        )
    }
}

export default Subscriptions;