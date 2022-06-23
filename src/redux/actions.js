export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const SET_AUTH = 'SET_AUTH';


export const setName = name => dispatch => {

    dispatch({
        type: SET_USER_NAME,
        payload: name,
    })
}

export const setAge = age => dispatch => {

    dispatch({
        type: SET_USER_AGE,
        payload: age,
    })
}

export const setAuth = auth => dispatch => {
    dispatch({
        type: SET_AUTH,
        payload: auth,
    })
}