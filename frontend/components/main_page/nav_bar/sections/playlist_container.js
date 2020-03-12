import { connect } from 'react-redux';
import Playlists from './playlist';

const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        // createPlaylist: name => dispatch(createPlaylist(name))
    }
}


export default connect(mSTP, mDTP)(Playlists);