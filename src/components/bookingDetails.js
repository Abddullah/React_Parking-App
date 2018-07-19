import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setBooking } from '../store/action/action';
import { getBookingList } from '../store/action/action';





class BookingDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startTimeInMilliSeconds: null,
            endTimeInMilliSeconds: null,
            date: null,
            time: null,
            location: "",
            slot: "",
            hours: "",
        }

        this.bookNow = this.bookNow.bind(this);
        this._onChangeDate = this._onChangeDate.bind(this);
        this._onChangeTime = this._onChangeTime.bind(this);
        this._onChangeHours = this._onChangeHours.bind(this);
        this._onChangeDropDownLocation = this._onChangeDropDownLocation.bind(this);
        this._onChangeDropDownSlot = this._onChangeDropDownSlot.bind(this);

    }



    _onChangeDate(event) {
        let cloneDateInmiliSecond = new Date(event.target.value).getTime();
        this.setState({
            date: cloneDateInmiliSecond
        })
    }


    _onChangeTime(event) {
        var hoursRequired = event.target.value.slice(0, 2);
        var minsRequired = event.target.value.slice(3);
        var milliSecondsPerHourConst = 1000 * 60 * 60;
        var milliSecondsPerMinutesConst = 1000 * 60;



        var timeInMiliSecondsRequired = Number(milliSecondsPerHourConst * hoursRequired) + Number(milliSecondsPerMinutesConst * minsRequired);
        var dateInMiliSeconds = this.state.date;
        var startBookingTime = dateInMiliSeconds + timeInMiliSecondsRequired;

        this.setState({
            startTimeInMilliSeconds: startBookingTime,
            time: timeInMiliSecondsRequired

        })

    }


    _onChangeHours(event) {

        var bookiingHours = event.target.value;
        var hoursRequired = bookiingHours.slice(0);
        var milliSecondsPerHourConst = 1000 * 60 * 60;

        var hoursInMiliSecondsRequired = Number(milliSecondsPerHourConst * hoursRequired);


        var cloneStartTime = this.state.startTimeInMilliSeconds;
        var endBookingTime = cloneStartTime + hoursInMiliSecondsRequired;

        // console.log(cloneStartTime)
        // console.log(endBookingTime)
        this.setState({
            endTimeInMilliSeconds: endBookingTime,
            hours: event.target.value
        })



    }


    _onChangeDropDownLocation(event) {
        // console.log(event.target.value)
        this.setState({
            location: event.target.value
        })



    }

    _onChangeDropDownSlot(event) {
        // console.log(event.target.value)
        this.setState({
            slot: event.target.value
        })



    }



    componentWillReceiveProps(nextProps) {
        let bookedData = nextProps.bookedData
        this.setState({
            bookedData: bookedData
        })


    }

    componentWillMount() {
        // let bookedData = this.props.bookedData

        // console.log(bookedData)



        let userUid = this.props.currentUser;
        // console.log(userUid,'haider');
        this.props.getBookingList(userUid);



    }


    bookNow() {

        if (this.state.location === "" || this.state.slot === "" || this.state.date === null || this.state.time === null || this.state.hours === "") {
            alert("Please fill Complete form")
        }
        else {

            let setBooking = {
                startTime: this.state.startTimeInMilliSeconds,
                endTime: this.state.endTimeInMilliSeconds,
                date: this.state.date,
                time: this.state.time,
                location: this.state.location,
                slot: this.state.slot,
            }
            var flagMatched = false;
            for (var i = 0; i < this.state.bookedData.length; i++) {
                if (this.state.location === this.state.bookedData[i].location && this.state.slot === this.state.bookedData[i].slot && this.state.date === this.state.bookedData[i].date && this.state.startTimeInMilliSeconds === this.state.bookedData[i].startTime && this.state.endTimeInMilliSeconds === this.state.bookedData[i].endTime) {
                    flagMatched = true;
                    break;
                }
                else {
                    flagMatched = false;
                }

            }
            if (flagMatched === true) {
                alert("This Slot already book")
            }

            else {
            
                this.setState({
                    startTimeInMilliSeconds: null,
                    endTimeInMilliSeconds: null,
                    date: null,
                    time: null,
                    location: "",
                    slot: "",
                }, function () {
                    console.log(this)
                })
                this.props.setBooking(setBooking);
            }
        }




    }


    render() {
        // console.log(this.state.bookedData)

        return (
            <div>
                {/* <h1>Hello World {this.props.userName}</h1> */}
                <nav className="navbar navbar-light" >
                    <a className="navbar-brand" href="#">SMART PARKING</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><Link to='/bookingDetails'> BOOK PARKING</Link> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><Link to='/viewbooking'> VIEW BOOKING</Link> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link " disabled href="#"><Link to='/signin'> FEED BACK</Link> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><Link to='/signin'>LOGOUT</Link></a>
                            </li>

                        </ul>
                        <span className="navbar-text">
                            Hello {this.props.userName}
                        </span>
                    </div>
                </nav>
                <br />
                <br />

                <hr />
                <hr />



                <div className="center">
                    {/* <div className="btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            LOCATION
                         </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Gulistan-E-Johar</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Parking Plaza</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Khadda Market</a>

                        </div>
                    </div> */}
                    <b className="input-group mb-6 inputCenter">Select Location</b>

                    <select required className="btn btn-outline-secondary inputCenter " onChange={this._onChangeDropDownLocation}>
                        <option value="" >Please Select Location</option>
                        <option value="Gulistan-E-Johar" >Gulistan-E-Johar</option>
                        <option value="Parking Plaza" >Parking Plaza</option>
                        <option value="Khadda Market" >Khadda Market</option>
                    </select>

                    <b className="input-group mb-6 inputCenter">Select Slots</b>

                    <select required className="btn btn-outline-secondary inputCenter " onChange={this._onChangeDropDownSlot}>
                        <option value="" >Please Select Slot</option>
                        <option value="A" >A</option>
                        <option value="B" >B</option>
                        <option value="C" >C</option>
                    </select>


                    {/* <div className="btn-group ">
                        <button type="button" className="btn btn-danger  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            SLOTS
                         </button>
                        <div className="dropdown-menu" onChange={this._onChangeDropDown}>
                            <a className="dropdown-item" href="# " >A</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">B</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">C</a>

                        </div>
                    </div> */}


                    <br />
                    <b className="input-group mb-6 inputCenter" >Select Date</b>

                    <div className="input-group mb-6 inputCenter" >
                        <input required type="date" className="form-control" placeholder="Select Date" aria-describedby="basic-addon2" defaultValue={this.state.date} onChange={this._onChangeDate} />
                    </div>
                    <b className="input-group mb-6 inputCenter">Select Time</b>

                    <div className="input-group mb-6 inputCenter" >
                        <input required type="time" className="form-control" placeholder="Select Time:" aria-describedby="basic-addon2" defaultValue={this.state.time} onChange={this._onChangeTime} />
                    </div>
                    <b className="input-group mb-6 inputCenter">Select Hours</b>

                    <div className="input-group mb-6 inputCenter" >
                        <input required type="number" className="form-control" placeholder="Select Hours:" aria-describedby="basic-addon2" onChange={this._onChangeHours} />
                    </div>
                    {/* <div className="input-group mb-6 inputCenter" >
                            <input type="submit" className="form-control btn btn-success button" aria-describedby="basic-addon2" onClick={this.bookNow} value="Book Now" />
                        </div> */}
                    {/* <!-- Example single danger button --> */}

                    <br />


                    <button onClick={this.bookNow} className="btn btn-success button ">Book Now</button><br /><br />


                </div>

            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        userName: state.root.userName,
        bookedData: state.root.bookedData

    })
}
function mapDispatchToProp(dispatch) {
    return ({
        setBooking: (bookingDetails) => {
            dispatch(setBooking(bookingDetails))
        },
        getBookingList: (userUid) => {
            dispatch(getBookingList(userUid))
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(BookingDetails);



