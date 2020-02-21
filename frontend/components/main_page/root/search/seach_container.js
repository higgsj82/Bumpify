import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { getAllAlbums, getAllArtists, getAllSongs } from '../../../util/audio_api_utils';
import Search from './search';


const mSTP = (state, ownProps) => {
    return {
        artists: state.entities.artists,
        albums: state.entities.albums
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        // getAllArtists: () => dispatch(getAllArtists()),
        // getAllAlbums: () => dispatch(getAllAlbums()),
    }
}


export default connect(mSTP, mDTP)(Search);