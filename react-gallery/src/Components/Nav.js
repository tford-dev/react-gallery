import React from 'react';
import {
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

const Nav = (props) =>{
    const calling = props.funcCall;
    return(
        <Router>
            <nav className="main-nav">
                <ul>
                    <li onClick={calling}><NavLink to="/street-bmx">BMX</NavLink></li>
                    <li onClick={calling}><NavLink to="/dogs">Dogs</NavLink></li>
                    <li onClick={calling}><NavLink to="/computers">Computers</NavLink></li>
                </ul>
            </nav>
        </Router>
    )
}

export default Nav;