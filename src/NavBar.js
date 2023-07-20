import React from "react";
import {NavLink} from 'react-router-dom';
function NavBar() {
    return (
              <nav className="row navbar nav-pills justify-content-center">
                <div className="col-2 nav-item">
                    <NavLink className="nav-link text-center"to="/">Home</NavLink>
                </div>
                <div className="col-3 nav-item">
                    <NavLink className="nav-link text-center" to="/areas">My Garden</NavLink>
                </div>
             </nav>
    )
}

export default NavBar;