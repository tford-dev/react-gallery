import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
//App components
import App from "../App";

const Paths = () =>{
    return(
    <Router basename="/react-gallery">
        <Switch>
            <Route exact path="/react-gallery" component={App} />
            <Route path="/search/:id" component={App} />
            <Route path="/street-bmx" component={App} />
            <Route path="/dogs" component={App} />
            <Route path="/legos" component={App} />
            <Route path="/error" component={App} />
            <Redirect from="*" to="/error" />
        </Switch>
    </Router>
    )
};

export default Paths;