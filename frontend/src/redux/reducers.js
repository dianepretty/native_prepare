import { SET_USER_NAME, SET_USER_AGE, SET_AUTH } from "./actions";

const initialState = {
    name: '',
    age: 0,
    auth: false,
}


function userReducer(state = initialState, action) {
    switch (action.type) {

        case SET_USER_NAME:
            return {...state, name: action.payload };
        case SET_USER_AGE:
            return {...state, age: action.payload };
        case SET_AUTH:
            return {...state, auth: action.payload };

        default:
            return state;

    }
}


export default userReducer