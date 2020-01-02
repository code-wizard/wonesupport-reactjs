import React from 'react';
import { Link } from 'react-router-dom';

const CallDropDown = ({ close, openModal }) => {
    return(
        <div className="call_dropdown">
            <Link href="#" id="call_init">
                <span className="-icon"><i className="phone-call-icon"></i></span>
                <span><b>Call</b>Wonesupport Call</span>
            </Link>
            <Link to="#" onClick={openModal}>
                <span className="-icon"><i className="call-dial-icon"></i></span>
                <span><b>+2348923423777234</b> Wonesupport Mobile</span>
            </Link>
        </div>
    )
}
export default CallDropDown;