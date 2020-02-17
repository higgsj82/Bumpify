import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mSTP = state => {
    return {
        msg: "Hello World"
    }
}

// const mDTP = dispatch => {

// }


export default connect(mSTP)(NavBar);