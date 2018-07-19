import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinAction } from '../store/action/action';
import {
    Link
} from 'react-router-dom';

class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'khan@gmail.com',
            password: "123456"
        }


        this.signin = this.signin.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);

    }

    signin() {
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        this.setState({
            email: '',
            password: ''
        })
        this.props.signinWithEmailPassword(user);
    }
    _onChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    _onChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <div>

                <nav className="navbar navbar-light" >
                    <a className="navbar-brand" href="#">SMART PARKING</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><Link to='/signin'> Signin</Link> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><Link to='/signup'>Signup</Link></a>
                            </li>

                        </ul>
                        <span className="navbar-text">
                            Develope by Abdullah Shah
                          </span>
                    </div>
                </nav>



                {/* <div>


                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">SMART PARKING</a>
                            </div>

                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span className="glyphicon glyphicon-user"></span> <Link to='/signup'>Sign Up</Link></a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span><Link to='/signin'> Login</Link></a></li>
                            </ul>
                        </div>
                    </nav>
                </div> */}



                <hr />
                <hr />

                <h1 className="headingCenter">Signin</h1>
                <div className="center">
                    <b className="input-group mb-6 inputCenter">Email Address</b>

                    <div className="input-group mb-6 inputCenter">
                        <input type="text" className="form-control " placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.email} onChange={this._onChangeEmail} />
                    </div>
                    <b className="input-group mb-6 inputCenter">Password</b>

                    <div className="input-group mb-6 inputCenter" >
                        <input type="text" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.password} onChange={this._onChangePassword} />
                    </div>

                    <button onClick={this.signin} className="btn btn-success button ">Signin</button><br /><br />

                    <center>
                        <a href="#"> <Link to='/signup'>Create a new account
</Link>
                        </a>
                    </center>


                </div>











                {/* <h1>Hello World Signin</h1>
                <label>Email:<input type='text' name='email' value={this.state.email} onChange={this._onChangeEmail} /></label>
                <br />
                <label>Password:<input type='password' name='password' value={this.state.password} onChange={this._onChangePassword} /></label>
                <button onClick={this.signin}>Signin</button> */}




            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        // userName: state.root.userName
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        signinWithEmailPassword: (user) => {
            dispatch(signinAction(user))
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signin);

