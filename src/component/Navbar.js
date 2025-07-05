import React from "react"
import PropTypes from 'prop-types'


import './Navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar__logo">MyBrand</div>
                <ul className="navbar__menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="navbar__button">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </nav>
        </>
    );
}


Navbar.defaultProps = {
    title : "Set title here",
    age : 18
}

