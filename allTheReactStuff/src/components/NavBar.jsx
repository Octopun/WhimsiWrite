import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div>
            <header>
                <div className="navbar_logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav>
                    <Link to="/" className="navbar_link">Home</Link>
                    <Link to="/notebook" className="navbar_link">Notebook</Link>
                    <Link to="/todos" className="navbar_link">Todo</Link>
                    {!props.signedIn && (
                        <div className="navbar_menu">
                            <Link to="/login" className="navbar_link">Login</Link>
                            <Link to="/signup" className="navbar_link">Sign Up</Link>
                        </div>
                    )}
                </nav>
            </header>
        </div>
    );
}

export default NavBar;
