import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import config from "../../config/config";
import "../Modal/index.js"

class Navbar extends Component {
    state = {}
    render() {
        return (
            <>
            
                
                <nav className="navbar navbar-expand-lg navbar-dark" id="nav-banner">
                    <a className="navbar-brand" href="/">
                        <img className="logo-img" src="https://commencement.uoregon.edu/sites/commencement2.uoregon.edu/files/guidebook-beaduck.png" alt="banner" />
                    </a>
                    <a className="navbar-brand" href="/">Campsite</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                    | Home |
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Register" className={window.location.pathname === "/Register" ? "nav-link active" : "nav-link"}>
                                    | Register |
                            </Link>
                            </li>

                            <li className="nav-item">

                                    <a className={window.location.pathname === "/auth/logout" ? "nav-link active" : "nav-link"}
                                        href={config.serverHost + "/auth/logout"}>
                                        | Log Out |
                                    </a> 
                                    </li>
                                    <li className="nav-item">
                                    <a href={config.serverHost + "/auth/google"}
                                        className={window.location.pathname === "/auth/logout" ? "nav-link active" : "nav-link"}>
                                        | Log In |
                                     </a>
                                
                                {/* <Link to="/Login" className={window.location.pathname === "/Login" ? "nav-link active" : "nav-link"}>
                                Login
                            </Link> */}
                            </li>
                        </ul>
                    </div>
                </nav>
                
            </>
        );
    }
}

export default Navbar;