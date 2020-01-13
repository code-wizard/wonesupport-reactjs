import React, { Component }  from 'react';
import { WoneInnerMain } from '../common';
import Chart from '../chart';
import './chat-report.style.scss';



class VoiceReport extends Component {
    render() {
        return(
            <WoneInnerMain>
                <section className="col-sm-12 col-md-12 col-lg-12">
                    <div className="panel__title">
                    <div className="label__wrap">Current activity</div>
                    <div className="filter__wrapper">
                        <div className="form-group form_wrapper with_select">
                        <label for="">From</label>
                        <select className="form-control select-type select">
                            <option>Choose...</option>
                            <option selected>10 August</option>
                        </select>
                        </div>
                        <div className="form-group form_wrapper with_select">
                        <label for="">to</label>
                        <select className="form-control select-type select">
                            <option>Choose...</option>
                            <option selected>10 August</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="col-sm-12 col-md-12 col-lg-12">
                    <section className="details__card">
                        <div className="flow__card"><span>0</span><span>Total Calls</span></div>
                        <div className="flow__card"><span>0</span><span>Call backs</span></div>
                        <div className="flow__card"><span>0</span><span>Widget call back</span></div>
                        <div className="flow__card"><span>0</span><span>Agent online</span></div>
                        <div className="flow__card"><span>00:00</span><span>Average call time</span></div>
                        <div className="flow__card"><span>00:00</span><span>Longest call time</span></div>
                    </section>
                </section>
                <section className="col-sm-12 col-md-12 col-lg-12">
                    <div className="panel__title">
                        <div className="label__wrap">Voice call report</div>
                    </div>

                    <div className="white__bg">
                        <div className="chart__pad">
                            <div className="panel__title">
                                <div className="filter__wrapper">
                                    <div className="form-group form_wrapper with_select">
                                    <select className="form-control select-type select">
                                        <option>Choose...</option>
                                        <option selected>10 August</option>
                                    </select>
                                    </div>
                                    <div className="form-group form_wrapper with_select">
                                    <label for="">to</label>
                                    <select className="form-control select-type select">
                                        <option>Choose...</option>
                                        <option selected>10 August</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="label__wrap">
                                    Jan 10, 00:00 
                                    <span className="-icon">
                                        <i className="arrow-right-icon"></i>
                                    </span> 
                                    05:05
                                </div>
                            </div>

                            <div className="wone__chartview">
                                <Chart />
                            </div>

                            <div className="dot__details">
                                <div className="avg__call-time">
                                    <span className="dot"></span>
                                    Average call time
                                </div>
                                <div className="total__calls">
                                    <span className="dot"></span>
                                    Total calls
                                </div>
                            </div>
    
                            <div className="chart__record">
                                <div className="chart__record-section">
                                    <table>
                                    <tr>
                                        <td>Total calls</td>
                                        <td>0 _ _ _</td>
                                    </tr>
                                    <tr>
                                        <td>Total callback calls</td>
                                        <td>0 _ _ _</td>
                                    </tr>
                                    <tr>
                                        <td>Total widget call back</td>
                                        <td>0 _ _ _</td>
                                    </tr>
                                    <tr>
                                        <td>Total chat requests</td>
                                        <td>0 _ _ _</td>
                                    </tr>
                                    <tr>
                                        <td>Total inbound calls</td>
                                        <td>0 _ _ _</td>
                                    </tr>
                                    <tr>
                                        <td>Total outbound calls</td>
                                        <td>0 _ _ _</td>
                                    </tr>
                                    </table>
                                </div>
                                <div className="chart__record-section">
                                    <table>
                                    <tr>
                                        <td>Max call waiting</td>
                                        <td>0 _ _ _</td>
                                    </tr>
                                    <tr>
                                        <td>Abandoned in queue</td>
                                        <td>0 _ _ _</td>
                                    </tr>
                                    <tr>
                                        <td>Exceeded queue time</td>
                                        <td>0 _ _ _</td>
                                    </tr>
                                    <tr>
                                        <td>Voicemail</td>
                                        <td>0 _ _ _</td>
                                    </tr>
                                    <tr>
                                        <td>Outside business hours</td>
                                        <td>0 _ _ _</td>
                                    </tr>
                                    <tr>
                                        <td>Customer requested voicemail</td>
                                        <td>0 _ _ _</td>
                                    </tr>
                                    </table>
                                </div>
                                <div className="chart__record-section">
                                    <table>
                                    <tr>
                                        <td>Average callback waiting time</td>
                                        <td>00:00</td>
                                    </tr>
                                    <tr>
                                        <td>Average waiting time</td>
                                        <td>00:00</td>
                                    </tr>
                                    <tr>
                                        <td>Average time to answer</td>
                                        <td>00:00</td>
                                    </tr>
                                    <tr>
                                        <td>Average duration</td>
                                        <td>00:00</td>
                                    </tr>
                                    <tr>
                                        <td>Average hold time</td>
                                        <td>00:00</td>
                                    </tr>
                                    <tr>
                                        <td>Average wrap up time</td>
                                        <td>00:00</td>
                                    </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="col-sm-12 col-md-12 col-lg-12">
                    <div className="panel__title" style={{marginTop: '1em'}}>
                    <div className="label__wrap">Agent activity</div>
                    </div>
                    <div className="white__bg" style={{marginBottom: '7px'}}>
                    <div className="panel__title">
                        <div className="filter__wrapper">
                        <div className="label__wrap">Agent activity</div>
                        <div class="form-group form_wrapper">
                            <select class="form-control select-type">
                                <option>Choose...</option>
                                <option selected>All Department</option>
                            </select>
                        </div>
                        </div>
                        <div className="label__wrap">
                            Jan 10, 00:00 
                            <span className="-icon">
                                <i className="arrow-right-icon"></i>
                            </span> 
                            05:05
                        </div>
                    </div>
                    <div className="table__inforpadding">
                        <table className="table">
                        <thead>
                            <tr>
                            <th></th>
                            <th>Agent</th>
                            <th>Status</th>
                            <th>Total online time</th>
                            <th>Time available</th>
                            <th>Total talk time</th>
                            <th>Total wrap up time</th>
                            <th>Calls accepted</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>
                                <span className="-icon"><i className="admin-user-icon"></i></span>
                            </td>
                            <td className="user__name">Kehinde Oladipo</td>
                            <td>
                                <div className="call-status">
                                <span className="status-call"></span>
                                <select className="form-control set-status" id="select-status">
                                    <option>Online</option>
                                    <option selected>Offline</option>
                                </select>
                                </div>
                            </td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            </tr>
                            <tr>
                            <td>
                                <span className="user___img">
                                    <img src={require("../../assets/img/users/user2.jpg")} alt="name-user" />
                                </span>
                            </td>
                            <td className="user__name">Kehinde Oladipo</td>
                            <td>
                                <div className="call-status">
                                <span className="status-call"></span>
                                <select className="form-control set-status" id="select-status">
                                    <option>Online</option>
                                    <option selected>Offline</option>
                                </select>
                                </div>
                            </td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            <td>00:00:00</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </section>
            </WoneInnerMain>
        );
    }
}

export default VoiceReport;