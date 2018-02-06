import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
class Home extends Component {

 

    render() {
        return (
            <div>
                <h1>Hello World {this.props.userName}</h1>
            
            </div>
        )
    }
}

function mapStateToProp(state){
    return({
        userName: state.root.userName
    })
}
function mapDispatchToProp(dispatch){
    return({
        // changeUserName: ()=>{dispatch(changeUserName())}
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Home);

