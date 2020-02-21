import { RECEIVE_SONG } from '../../actions/song_actions';
import { UPDATE_CURRENT_SONG } from '../../actions/media_actions';
import { RECEIVE_ARTIST } from '../../actions/artist_actions';

const _pseudoSong = Object.freeze({
    currentSong: null
});

const mediaReducer = (state = _pseudoSong, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign({}, state, { [action.song.id]: action.song })
        case RECEIVE_ARTIST:
            return Object.assign({}, state, action.artist.popularSongs)
        case UPDATE_CURRENT_SONG: 
            return { currentSong: action.song }
        default:
            return state;
    }
}

export default mediaReducer;