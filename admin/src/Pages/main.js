import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import NotFound from './NotFound'
import AdminIndex from './AdminIndex';

function Main() {
    return (
        <Router>
            <Switch>
                {/*<Route exact path="/" render={() => <Redirect to="/index"/>} />*/}
                <Route path="/login/" exact component={Login} />
                <Route path="/404" exact component={NotFound} />
                <Route component={AdminIndex} />
                {/* <Redirect from="/" to="/index" /> */}
            </Switch>
        </Router>
    )
}

export default Main
