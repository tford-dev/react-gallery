import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Nav = () =>{
    return(
    <Router>
        <nav className="main-nav">
            <ul>
                <li><Link to="/cats" >Cats</Link></li>
                <li><Link to="/dogs">Dog</Link></li>
                <li><Link to="/computers">Computers</Link></li>
            </ul>
        </nav>
    </Router>
    )
}

export default Nav;