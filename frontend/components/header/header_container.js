import { connect } from 'react-redux';
import {
    signup,
    login,
    logout
} from '../../actions/session_actions';
import Header from './header';


const mSTP = state => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        signup: user => dispatch(signup(user)),
        login: user => dispatch(login(user)),
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(Header);