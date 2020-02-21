import { connect } from 'react-redux';
import Album from './album';
import { getAlbum } from '../../../../actions/album_actions';
import { logout } from '../../../../actions/session_actions';

const mSTP = (state, ownProps) => {
    const albumId = ownProps.match.params.id;
    const songIds = ownProps.match.params.song_ids
    return {
        albumId,
        artist: state.entities.albums[albumId],
        songIds
    }
}

const mDTP = dispatch => {
    return {
        getAlbum: id => dispatch(getAlbum(id)),
        logout: () => dispatch(logout()),
        // follow: () => dispatch(follow(artist))
    }
}


export default connect(mSTP, mDTP)(Album);