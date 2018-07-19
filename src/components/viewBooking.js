import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBookingList } from '../store/action/action';
import firebase from 'firebase';





class ViewBooking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookedData: [],
            flag: false
        }


    }

    componentWillReceiveProps(nextProps) {


        // let userUid = this.props.currentUser
        // this.props.getBookingList(userUid);


        let bookedData = nextProps.bookedData
        // console.log(bookedData)
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



        firebase.database().ref("/bookedslots/").on('child_removed', (data) => {
            console.log(data.val())


        })



    }
    cancledBooking(index) {
        // console.log(index)



        let cloneKey = this.state.bookedData[index].id
        console.log(this.state.bookedData[index].slotId)

        let cloneBookedData = this.state.bookedData
        firebase.database().ref("/bookedslots/" + this.state.bookedData[index].slotId).remove()
            .then((v) => {

                cloneBookedData.splice(index, 1)
                console.log(cloneBookedData)
                this.setState({
                    bookedData: cloneBookedData
                })
            });



    }






    render() {
        // console.log(this.state.bookedData)
        // const listHeading = ["Location", "Slots", "Starting Date & Time	", "Ending Date & Time	", "Cancel Booking"];
        const listHeading = [{
            location: "Location",
            slots: "Slots",
            starting: "Starting Date & Time",
            ending: "Ending Date & Time",
            cancle: "Cancle Booking"

        }];


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
                <center>
                    <h1>
                        View Booking List
                </h1>
                    {/* <ol className="list-group ">
                    <center>

                        {listHeading.map((listHeading, index) => {
                            return (
                                <li className="list-group-item liAlign listHeading" key={index}>

                                    {listHeading.location}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {listHeading.slots}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {listHeading.starting}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {listHeading.ending}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {listHeading.cancle}
                                </li >

                            )
                        })
                        }

                        {this.state.bookedData.map((bookedData, index) => {
                            return (
                                <li className="list-group-item liAlign listHeading" key={index}>
                                    {bookedData.location}                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {bookedData.slot}                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {new Date(bookedData.startTime).toUTCString()}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {new Date(bookedData.endTime).toUTCString()}                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-outline-danger " >Cancled Booking</button>
                                </li >

                            )
                        })
                        }
                    </center>
                </ol> */}
                    <table class="table table-striped listHeading">
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Slots</th>
                                <th>Starting Date and Time</th>
                                <th>Ending Date and Time</th>
                                <th>Cancle Booking</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.bookedData.map((bookedData, index) => {
                                    return (
                                        <tr key={index}>
                                            <td> {bookedData.location}</td>
                                            <td>  {bookedData.slot}</td>
                                            <td> {new Date(bookedData.startTime).toUTCString()}</td>
                                            <td> {new Date(bookedData.endTime).toUTCString()}</td>
                                            <td>  <button className="btn btn-outline-danger " onClick={this.cancledBooking.bind(this, index)} >Cancled Booking</button></td>
                                        </tr >
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </center>




            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        bookedData: state.root.bookedData,
        currentUser: state.root.currentUser
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        getBookingList: (userUid) => {
            dispatch(getBookingList(userUid))
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(ViewBooking);



