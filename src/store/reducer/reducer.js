import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    userName: '',
    currentUser: '',
    users: [],
    bookedData: {},
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ALLUSERS:
            return ({
                ...state,
                users: action.payload
            })

        case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            })
        case ActionTypes.USERNAME:
            return ({
                ...state,
                userName: action.payload
            })
        case ActionTypes.BOOKEDDATA:
            return ({
                ...state,
                bookedData: action.payload
            })



        default:
            return state;
    }

}