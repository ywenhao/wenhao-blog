import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login';
import AdminIndex from './AdminIndex';

function Main() {
    return (
        <Router>
            {/*<Route exact path="/" render={() => <Redirect to="/index"/>} />*/}
            <Route path="/login/" exact component={Login} />
            <Route path="/" component={AdminIndex} />
            {/* <Redirect from="/" to="/index" /> */}
        </Router>
    )
}

export default Main
