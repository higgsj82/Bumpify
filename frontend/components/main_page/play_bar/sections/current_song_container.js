import { connect } from 'react-redux';
import CurrentSong from './current_song';

const mSTP = state => {
    return {
        currentSong: state.media.currentSong
        // currentArtist: state.currentArtist
    }
}

// const mDTP = dispatch => {
    // return {
        // likeSong: song => dispatch(likeSong(song))
    // }
// }


export default connect(mSTP)(CurrentSong);