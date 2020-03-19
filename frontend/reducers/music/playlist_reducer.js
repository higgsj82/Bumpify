// import { RECEIVE_SONG, RECEIVE_SONGS } from '../../actions/song_actions';
import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS } from '../../actions/playlist_actions'

const playlistReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PLAYLIST:
            return Object.assign({}, state, { [action.playlist.id]: action.playlist })
        case RECEIVE_PLAYLISTS:
            return Object.assign({}, state, action.playlists)
        default:
            return state;
    }
}

export default playlistReducer;