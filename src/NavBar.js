import React from "react";
import {NavLink} from 'react-router-dom';
function NavBar() {
    return (
        <div className="container">
            <div className="row">
                <div className="nav-item">
                    <nav className="navbar nav-tabs justify-content-center">
                    <NavLink className="nav-link"to="/">Home</NavLink>

                    </nav>
                </div>
            </div>


        </div>
    )
}

export default NavBar;