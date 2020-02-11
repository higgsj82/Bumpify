import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';


const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(Header);