import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Search from "./Search";
import PhotoContainer from "./PhotoContainer";

const Nav = () =>{
    return(
    <Router>
        <nav className="main-nav">
            <ul>
                <li><Link to="/bmx" >Bmx</Link></li>
                <li><Link to="/dogs">Dogs</Link></li>
                <li><Link to="/computers">Computers</Link></li>
            </ul>
        </nav>
    </Router>
    )
}

export default Nav;