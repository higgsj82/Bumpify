import { connect } from 'react-redux';
import PlayBar from './play_bar';

const mSTP = state => {
    return {
        currentSong: state.media.currentSong
    }
}

// const mDTP = dispatch => {

// }


export default connect(mSTP)(PlayBar);