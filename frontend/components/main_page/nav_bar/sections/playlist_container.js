import { connect } from 'react-redux';
import Playlists from './playlists';

const mSTP = (state = {}, ownProps) => {
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