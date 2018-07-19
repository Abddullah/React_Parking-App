// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// // import {
// //     Link
// //   } from 'react-router-dom';

// class Home extends Component {



//     render() {
//         return (




//             <div>
//                 {/* <div>
//                     <nav className="navbar navbar-inverse">
//                         <div className="container-fluid">
//                             <div className="navbar-header">
//                                 <a className="navbar-brand" href="#">SMART PARKING</a>
//                             </div>


//                             <div className="navbar-header ">
//                                 <a className="nav-item headerMargin " href="#">BOOK PARKING</a>
//                             </div>


//                             <div className="navbar-header ">
//                                 <a className="nav-item headerMargin" href="#">VIEW BOOKING</a>
//                             </div>

//                             <ul className="nav navbar-nav navbar-right">
//                                 <li><a href="#"><span className="glyphicon glyphicon-log-in"></span><Link to='/signup'> Logout</Link></a></li>
//                             </ul>
//                         </div>
//                     </nav>
//                 </div> */}

//                 <nav className="navbar navbar-light" >
//                     <a className="navbar-brand" href="#">SMART PARKING</a>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarText">
//                         <ul className="navbar-nav mr-auto">
//                             <li className="nav-item active">
//                                 <a className="nav-link" href="#"><Link to='/signin'> BOK PARKING</Link> <span className="sr-only">(current)</span></a>
//                             </li>
//                             <li className="nav-item active">
//                                 <a className="nav-link" href="#"><Link to='/signin'> VIEW BOOKING</Link> <span className="sr-only">(current)</span></a>
//                             </li>
//                             <li className="nav-item active">
//                                 <a className="nav-link " disabled href="#"><Link to='/signin'> FEED BACK</Link> <span className="sr-only">(current)</span></a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#"><Link to='/signin'>Logout</Link></a>
//                             </li>

//                         </ul>
//                         <span className="navbar-text">
//                             Develope by Abdullah Shah
//                           </span>
//                     </div>
//                 </nav>







//                 <center>
//                     {/* <h1>Hello World {this.props.userName}</h1> */}
                    
//                     <br/>
//                     <hr />
//                     <hr />
//                     <Link to="/bookingDetails"><button className="btn btn-outline-success btnMarginCustom" >Gulistan-E-Johar</button> </Link><br /><br />
//                     <Link to="/bookingDetails">  <button className="btn btn-outline-success btnMarginCustom" >Parking Plaza</button></Link><br /><br />
//                     <Link to="/bookingDetails"><button className="btn btn-outline-success btnMarginCustom" >Khadda Market</button></Link><br /><br />
//                     <hr />
//                     <hr />
//                 </center>








//             </div>
//         )
//     }
// }

// function mapStateToProp(state) {
//     return ({
//         userName: state.root.userName
//     })
// }
// function mapDispatchToProp(dispatch) {
//     return ({
//         // changeUserName: ()=>{dispatch(changeUserName())}
//     })
// }

// export default connect(mapStateToProp, mapDispatchToProp)(Home);





// // <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //     <ul className="navbar-nav mr-auto">
// //         <li className="nav-item active">
// //             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
// //         </li>
// //         <li className="nav-item">
// //             <a className="nav-link" href="#">Link</a>
// //         </li>
// //         <li className="nav-item dropdown">
// //             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// //                 Dropdown
// //     </a>
// //             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
// //                 <a className="dropdown-item" href="#">Action</a>
// //                 <a className="dropdown-item" href="#">Another action</a>
// //                 <div className="dropdown-divider"></div>
// //                 <a className="dropdown-item" href="#">Something else here</a>
// //             </div>
// //         </li>
// //         <li className="nav-item">
// //             <a className="nav-link disabled" href="#">Disabled</a>
// //         </li>
// //     </ul>

// // </div> 