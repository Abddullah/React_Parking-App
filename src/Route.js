import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
// import Home from './components/home';
import Signup from './components/signup';
import Signin from './components/signin';
import BookingDetails from './components/bookingDetails';
import ViewBooking from './components/viewBooking';


import history from './History';
// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    {/* <Route exact path="/home" component={Home} /> */}
                    <Route exact path="/bookingDetails" component={BookingDetails} />
                    <Route exact path="/viewbooking" component={ViewBooking} />


                </div>
            </Router>
        )
    }
}

export default Routers;