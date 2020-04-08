import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mSTP = state => {
    return {
      currentSong: state.media.currentSong,
      currentAlbum: state.media.currentAlbum
    };
}

// const mDTP = dispatch => {

// }


export default connect(mSTP)(NavBar);