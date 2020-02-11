import * as SessionAPIUtils from '../util/session_api_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const signup = newUser => dispatch => {
    return SessionAPIUtils.signup(newUser)
    .then(user => dispatch(receiveCurrentUser(user))),
    errors => dispatch(receiveErrors(errors))
}

export const login = returningUser => dispatch => {
    return SessionAPIUtils.login(returningUser)
    .then(user => dispatch(receiveCurrentUser(user))),
    errors => dispatch(receiveErrors(errors))
}

export const logout = () => dispatch => {
    return SessionAPIUtils.logout().then(() => dispatch(logoutCurrentUser()))
}