import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupAction } from '../store/action/action';
import {
    Link
} from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            userName: '',
            password: '',
            mobile: ''
        }


        this.signup = this.signup.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangeUserName = this._onChangeUserName.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);
        this._onChangeMoibleNumber = this._onChangeMoibleNumber.bind(this);

    }

    signup() {
        let user = {
            email: this.state.email,
            username: this.state.userName,
            password: this.state.password,
            mobile: this.state.mobile
        }
        this.setState({
            email: '',
            userName: '',
            password: '',
            mobile: ''
        })
        this.props.signupwithEmailPassword(user);
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

    _onChangeUserName(event) {
        this.setState({
            userName: event.target.value
        })
    }
    _onChangeMoibleNumber(event) {
        this.setState({
            mobile: event.target.value
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


                <h1 className="headingCenter">Signup</h1>
                <div className="center">
                    <b className="input-group mb-6 inputCenter">Email Address</b>
                    <div className="input-group mb-6 inputCenter">
                        <input type="text" className="form-control " placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.email} onChange={this._onChangeEmail} />
                    </div>
                    <b className="input-group mb-6 inputCenter">Password</b>
                    <div className="input-group mb-6 inputCenter" >
                        <input type="text" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.password} onChange={this._onChangePassword} />
                    </div>
                    <b className="input-group mb-6 inputCenter">User Name</b>
                    <div className="input-group mb-6 inputCenter">
                        <input type="text" className="form-control" placeholder="User Name" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.userName} onChange={this._onChangeUserName} />
                    </div>
                    <b className="input-group mb-6 inputCenter">Mobile Number</b>
                    <div className="input-group mb-6 inputCenter">
                        <input type="text" className="form-control" placeholder="Mobile Number" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.mobile} onChange={this._onChangeMoibleNumber} />
                    </div>
                    <button onClick={this.signup} className="btn btn-success button ">Signup</button><br /><br />

                    <center>
                        <a href="#"> <Link to='/signin'>already have an account?</Link>
                        </a>
                    </center>



                </div>








                {/* <h1>Hello World Signup</h1>
                <label>Email:<input type='text' name='email' value={this.state.email} onChange={this._onChangeEmail} /></label>
                <br />
                <label>User Name:<input type='text' name='username' value={this.state.userName} onChange={this._onChangeUserName} /></label>
                <br />
                <label>Password:<input type='password' name='password' value={this.state.password} onChange={this._onChangePassword} /></label>
                <button onClick={this.signup}>Signup</button> */}



            </div >
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
        signupwithEmailPassword: (userDetails) => {
            dispatch(signupAction(userDetails));
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signup);

