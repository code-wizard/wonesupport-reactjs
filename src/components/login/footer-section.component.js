import React from 'react';
import { Link } from 'react-router-dom';
import './footer-section.styles.scss';


const FooterSection = () => {
    return(
        // <!-- Footer -->
        <footer className="wonesupport-land-footer">
          <div className="container">
            <div className="row">
              <div className="col col-md-6 col-lg-6 wone-tag-links">
                <Link to="#">About</Link>
                <Link to="#">How customer support works</Link>
              </div>
              <div className="col col-md-6 col-lg-6 text-right">
                <Link to="#">Terms of use</Link>&nbsp; | &nbsp;<Link to="#">Privacy policy</Link>
              </div>
            </div>
          </div>
        </footer>
    )
}

export default FooterSection;