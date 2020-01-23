import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './fixed-header.styles.scss';

const FixedHeader = () => (
    <header className="wonesupport-landing-fixed-header">
        <Navbar expand="lg">
            <div className="container">
                <Link className="navbar-brand" to="#">
                    <img src={require("../../assets/img/wonesupport-logo.svg")} alt="logo" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <span className="link-home">
                    <Link to="#">
                        <FontAwesomeIcon icon={faHome} />
                        {" "}Got to Home page
                    </Link>
                    </span>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </header>
)

export default FixedHeader;


