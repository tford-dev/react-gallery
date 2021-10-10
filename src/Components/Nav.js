import React from 'react';
import {
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

//I added an even listener to each <li></li> element so an assigned function can be called when clicked
const Nav = (props) =>{
    const calling = props.funcCall;
    return(
        <Router>
            <nav className="main-nav">
                <ul>
                    <li onClick={calling}><NavLink to="/street-bmx">BMX</NavLink></li>
                    <li onClick={calling}><NavLink to="/dogs">Dogs</NavLink></li>
                    <li onClick={calling}><NavLink to="/legos">Legos</NavLink></li>
                </ul>
            </nav>
        </Router>
    )
}

export default Nav;