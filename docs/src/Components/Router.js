import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "../App";
import Results from "./Results";


const Router = () => {
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path={`/search/:id`} component={Results} exact/>
        </Switch>
    </BrowserRouter>
    )
}

export default Router;