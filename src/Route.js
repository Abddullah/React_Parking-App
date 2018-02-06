import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home';
import Signup from './components/signup';
import Signin from './components/signin';
import Navbar from './components/navbar';


import history from './History';

// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Navbar />
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    
                </div>
            </Router>
        )
    }
}

export default Routers;