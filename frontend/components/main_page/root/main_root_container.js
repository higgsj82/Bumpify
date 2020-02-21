import { connect } from 'react-redux';
import MainRoot from './main_root';
import { logout } from '../../../actions/session_actions';
import { getAllAlbums, getAllArtists, getAllSongs } from '../../../util/audio_api_utils';


const mSTP = ( state, ownProps ) => {
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


export default connect(mSTP, mDTP)(MainRoot);
