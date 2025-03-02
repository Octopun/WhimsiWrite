import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";


const App = () => {
    return (
        <>
        <header>
            <NavBar />
        </header>
        <div className="App-container">
            <Outlet />
        </div>
        </>
    );
}
// C4CED1