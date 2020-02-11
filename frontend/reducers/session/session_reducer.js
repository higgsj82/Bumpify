import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../../actions/session_actions';

const _pseudoUser = Object.freeze({
    id: null
});

const sessionReducer = ( state = _pseudoUser, action ) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id }
        case LOGOUT_CURRENT_USER:
            return _pseudoUser;
        default:
            return state;
    }
}

export default sessionReducer;