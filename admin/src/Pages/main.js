import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './Login';
import AdminIndex from './AdminIndex';

function Main() {
    return (
        <Router>
            <Switch>
                {/*<Route exact path="/" render={() => <Redirect to="/index"/>} />*/}
                <Route path="/login/" exact component={Login} />
                <Route path="/index/" exact component={AdminIndex} />
                <Redirect from="/" to="/index" />
            </Switch>
        </Router>
    )
}

export default Main
