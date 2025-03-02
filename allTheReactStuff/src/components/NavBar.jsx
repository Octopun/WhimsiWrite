import React from 'react';

const NavBar = (props) => {
    return (
        <div>
            <header>
                <div className="navbar_logo">
                    <h1>My Notebook</h1>
                </div>
                <nav>
                    <Link to="/home" className="navbar_link">Home</Link>
                    <Link to="/notebook" className="navbar_link">Notebook</Link>
                    <Link to="/todos" className="navbar_link">Notes</Link>
                    {!props.signedIn ? (
                        <div className="navbar_menu">
                            <Link to="/login" className="navbar_link"></Link>
                            <Link to="/signup" className="navbar_link"></Link>
                        </div>
                    ) : null}
                </nav>
                {props.signedIn ? (
                    )}
            </header>
        </div>
    );
}
