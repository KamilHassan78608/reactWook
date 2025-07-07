import React from "react";
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    const handleAuthClick = () => {
        navigate('/AuthForm');
    };

    return (
        <>
            <nav className="navbar" style={myStyle}>
                <div className="navbar__logo">MyBrand</div>
                <ul className="navbar__menu">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Feature">Feature</Link></li>
                    <li><Link to="/Project">Project</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <div className="navbar__button">
                    <label className="switch">
                        <input type="checkbox" onChange={props.enabaleMode} checked={props.mode} />
                        <span className="slider"></span>
                    </label>
                    <button onClick={handleAuthClick} style={colorStyle}>Login</button>
                    <button onClick={handleAuthClick} style={colorStyle}>Sign Up</button>
                </div>
            </nav>
        </>
    );
}
