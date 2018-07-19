
import ActionTypes from '../constant/constant';
import history from '../../History';
import firebase from 'firebase';
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory()



var config = {
    apiKey: "AIzaSyDqKEhMJ-_mztRx_imbYs9gwJfJ3aFCgzg",
    authDomain: "example-c1bd0.firebaseapp.com",
    databaseURL: "https://example-c1bd0.firebaseio.com",
    projectId: "example-c1bd0",
    storageBucket: "example-c1bd0.appspot.com",
    messagingSenderId: "976242645286"
};
firebase.initializeApp(config);




export function signupAction(user) {

    return dispatch => {
        // console.log('user', user);
        // history.push('/signin');

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                // console.log('signed up successfully', createdUser.uid);
                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('users/' + createdUser.uid + '/').set(user)
                    .then(() => {
                        firebase.database().ref('users/').once('value')
                            .then((userData) => {
                                let allUsers = userData.val();
                                let currentUserUid = firebase.auth().currentUser.uid;
                                console.log(allUsers, user, currentUserUid)
                                let userName = allUsers[currentUserUid].username
                                dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers })
                                dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                                dispatch({ type: ActionTypes.USERNAME, payload: userName })
                                firebase.database().ref('message/').once('value')
                                    .then((messagesData) => {
                                        let messages = messagesData.val();
                                        console.log(messages);
                                        // dispatch({ type: ActionTypes.MESSAGES, payload: messages })
                                        history.push('/bookingDetails');
                                    })

                            })
                    })


            })
            .catch(function (error) {
                console.log(error.message);
                alert(error.message);

            })



    }
}



export function signinAction(user) {
    return dispatch => {
        // console.log('user in signin', user);
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                firebase.database().ref('users/').once('value')
                    .then((userData) => {
                        let allUsers = userData.val();
                        let currentUserUid = firebase.auth().currentUser.uid;
                        let allUsersArr = [];
                        for (var key in allUsers) {
                            allUsersArr.push(allUsers[key]);
                        }
                        dispatch({ type: ActionTypes.ALLUSERS, payload: allUsersArr })
                        dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                        firebase.database().ref('message/').once('value')
                            .then((messagesData) => {
                                let messages = messagesData.val();
                                // console.log(messages);
                                // dispatch({ type: ActionTypes.MESSAGES, payload: messages })
                                history.push('/bookingDetails');
                            })




                    })

            })
            .catch(function (error) {
                console.log(error.message);
                alert(error.message);

            })
    }
}



export function setBooking(user) {

    return dispatch => {
        // console.log('user', user);

        // let currentUserUid = firebase.auth().currentUser.uid;
        let firebaseRef = firebase.database().ref("/bookedslots/")
        firebaseRef.push(user)

            .then(() => {
                alert("data save")
            })

            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });

    }
}



export function getBookingList() {

    return dispatch => {

        let bookedslots = [];
        // let currentUserUid = firebase.auth().currentUser.uid;
        // let currentUserUid = userUid
        firebase.database().ref("/bookedslots/").once('value', (bookedSlotSnapshot) => {
            let obj = bookedSlotSnapshot.val();
            // obj.slotId = bookedSlotSnapshot.key;
            console.log(obj)

            // var objKey= "userName"
            // obj[objKey]
            // console.log(obj)
            for (var key in obj) {          
                obj[key].slotId = key
                console.log(key, '****  ', obj[key]);
                bookedslots.push(obj[key])
            }

            // bookedslots.push(obj)
            dispatch({ type: ActionTypes.BOOKEDDATA, payload: bookedslots })


        })
    }
}


