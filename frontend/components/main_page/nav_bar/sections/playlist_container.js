import { connect } from 'react-redux';
import Playlists from './playlist';

const mSTP = (state = {}, ownProps) => {
    // debugger
    return {
        playlists: state.entities.music.playlists
    }
}

const mDTP = dispatch => {
    return {
    //     createPlaylist: name => dispatch(createPlaylist(name))
    }
}


export default connect(mSTP, mDTP)(Playlists);