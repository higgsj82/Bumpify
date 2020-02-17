import { connect } from 'react-redux';
import PlayBar from './play_bar';

const mSTP = state => {
    return {
        msg: "Hello World"
    }
}

// const mDTP = dispatch => {

// }


export default connect(mSTP)(PlayBar);