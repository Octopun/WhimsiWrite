import React from "react";
import { Outlet } from "react-router-dom";
import './App.css';
import './styles.css';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default App;