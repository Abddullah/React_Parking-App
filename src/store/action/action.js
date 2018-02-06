
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
        console.log('user', user);
        // history.push('/signin');

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                console.log('signed up successfully', createdUser.uid);
                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('users/' + createdUser.uid + '/').set(user)
                    .then(() => {
                        firebase.database().ref('users/').once('value')
                            .then((userData) => {
                                let allUsers = userData.val();
                                let currentUserUid = firebase.auth().currentUser.uid;
                                dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers })
                                dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                                firebase.database().ref('message/').once('value')
                                    .then((messagesData) => {
                                        let messages = messagesData.val();
                                        console.log(messages);
                                        dispatch({ type: ActionTypes.MESSAGES, payload: messages })
                                        history.push('/chat');
                                    })

                            })
                    })


            })



    }
}



export function signinAction(user) {
    return dispatch => {
        console.log('user in signin', user);
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                firebase.database().ref('users/').once('value')
                    .then((userData) => {
                        let allUsers = userData.val();
                        let currentUserUid = firebase.auth().currentUser.uid;
                        let allUsersArr = [];
                        for(var key in allUsers){
                            allUsersArr.push(allUsers[key]);
                        }
                        console.log(allUsersArr);
                        dispatch({ type: ActionTypes.ALLUSERS, payload: allUsersArr })
                        dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                        firebase.database().ref('message/').once('value')
                            .then((messagesData) => {
                                let messages = messagesData.val();
                                console.log(messages);

                                dispatch({ type: ActionTypes.MESSAGES, payload: messages })
                                history.push('/chat');
                            })




                    })
            })
    }
}




