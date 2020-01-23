import React, { Component } from 'react';
import './login.styles.scss';

//components
import FixedHeader from '../../components/login/fixed-header.component'
import MainContent  from '../../components/login/main-content.component';
import FooterSection from '../../components/login/footer-section.component';

class Login extends Component {
    render() {
        return(
            <div className="log_landing">   
                <FixedHeader />
                <MainContent />
                <FooterSection />
            </div>
        )
    }
}

export default Login;