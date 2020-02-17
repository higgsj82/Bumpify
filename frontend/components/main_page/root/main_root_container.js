import { connect } from 'react-redux';
import MainRoot from './main_root';
import { logout } from '../../../actions/session_actions';


const mSTP = state => {
    return {
        msg: "Hello World"
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}


export default connect(mSTP, mDTP)(MainRoot);
