import React from "react";
import './Navbar.css';

export default function Navbar(props) {
    const myStyle = {
        background: props.mode ? 'black' : 'linear-gradient(135deg, #4f46e5, #3b82f6)',
        color: props.mode ? 'white' : 'white',
        transition: 'all 0.3s ease'
    };

    const colorStyle = {
        background: 'white',
        color: props.mode ? 'black' : '#3b82f6',
    };

    return (
        <>
            <nav className="navbar" style={myStyle}>
                <div className="navbar__logo">MyBrand</div>
                <ul className="navbar__menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="navbar__button">
                    <label className="switch">
                        <input type="checkbox" onChange={props.enabaleMode} checked={props.mode} />
                        <span className="slider"></span>
                    </label> 
                    <button style={colorStyle}>Login</button>
                    <button style={colorStyle}>Sign Up</button>
                </div>
            </nav>
        </>
    );
}
