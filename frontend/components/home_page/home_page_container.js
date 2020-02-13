import { login } from '../../actions/session_actions';
import HomePage from './home_page';
import { connect } from 'react-redux';

const mSTP = (state) => {
    return {
        user: {email: "guest@yahoo.com", password: "password"}
    }
}

const mDTP = dispatch => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(HomePage);