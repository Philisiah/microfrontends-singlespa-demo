import React from "react";
import {navigateToUrl} from "single-spa";

const Navigation = () =>
    <nav className="navbar w3-border-bottom" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://single-spa.js.org/" onClick={navigateToUrl} >
               <img src="https://single-spa.js.org/img/logo-white-bgblue.svg" width="112" height="28"/>
            </a>

            <a role="button" className="burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="/" onClick={navigateToUrl}>
                    Single-Spa Demo
                </a>

                <a className="navbar-item">
                </a>
                <a className="navbar-item">
                </a>
                <a className="navbar-item">
                </a>
                <a className="navbar-item">
                    NavBar built with React
                </a>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary" href="/" onClick={navigateToUrl}>
                            <strong>HomePage - Made with React</strong>
                        </a>
                        <a className="button is-info" href="/vueapp" onClick={navigateToUrl}>
                            Page - made with Vue
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
export default Navigation;