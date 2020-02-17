import { connect } from 'react-redux';
import VolumeControlls from './volume_controlls';

const mSTP = state => {
    return {
        msg: "Hello World"
    }
}

// const mDTP = dispatch => {

// }


export default connect(mSTP)(VolumeControlls);