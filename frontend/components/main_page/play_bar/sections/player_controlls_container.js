import { connect } from 'react-redux';
import PlayerControlls from './player_controlls';

const mSTP = state => {
    return {
        msg: "Hello World"
    }
}

// const mDTP = dispatch => {

// }


export default connect(mSTP)(PlayerControlls);