import { RECEIVE_SONG } from '../../actions/song_actions';
import { UPDATE_CURRENT_SONG, PLAY_SONG, PAUSE_SONG } from '../../actions/media_actions';
import { RECEIVE_ARTIST } from '../../actions/artist_actions';
import { RECEIVE_ALBUM } from '../../actions/album_actions';

const defaultState = Object.freeze({
    currentSong: null,
    currentArtist: null,
    currentAlbum: null,
    playing: false,
    queue: [],
});

const mediaReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    // debugger
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign({}, state, { [action.song.id]: action.song })
        case RECEIVE_ARTIST:
            return Object.assign({}, state, action.artist.popularSongs, {currentArtist: action.artist.artist })
        case UPDATE_CURRENT_SONG: 
            return Object.assign({}, state, { currentSong: action.song })
        case PLAY_SONG:
            return Object.assign({}, state, { playing: true })
        case PAUSE_SONG:
            return Object.assign({}, state, { playing: false })
        case RECEIVE_ALBUM:
            return Object.assign({}, state, { currentAlbum: action.artist.albumCover })
        default:
            return state;
    }
}

export default mediaReducer;