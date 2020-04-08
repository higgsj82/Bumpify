import { connect } from 'react-redux';
import PlayBar from './play_bar';

const mSTP = state => {
    return {
      currentSong: state.media.currentSong,
      currentArtist: state.media.currentArtist,
      currentAlbum: state.media.currentAlbum
    };
}

// const mDTP = dispatch => {

// }


export default connect(mSTP)(PlayBar);