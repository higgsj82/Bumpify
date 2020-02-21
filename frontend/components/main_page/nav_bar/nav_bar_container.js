import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mSTP = state => {
    return {
        currentSong: state.media.currentSong
    }
}

// const mDTP = dispatch => {

// }


export default connect(mSTP)(NavBar);