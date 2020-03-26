import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { getPlaylists } from '../../../../actions/playlist_actions';

const mSTP = state => {
    return {
        playlists: state.entities.music.playlists,
        ids: state.entities.music.playlists.playlist_ids
    }
}

const mDTP = dispatch => {
    return {
        getPlaylists: () => dispatch(getPlaylists())
    }
}

export default connect(mSTP, mDTP)(PlaylistIndex);