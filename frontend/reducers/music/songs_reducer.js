import { RECEIVE_SONG, RECEIVE_SONGS } from '../../actions/song_actions';
import { RECEIVE_ARTIST } from '../../actions/artist_actions'
import { RECEIVE_ALBUM } from '../../actions/album_actions';

const songsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign({}, state, { [action.song.id]: action.song })
        case RECEIVE_SONGS:
            return Object.assign({}, state, action.songs)
        case RECEIVE_ARTIST:
            return Object.assign({}, state, action.artist.popularSongs)
        // case RECEIVE_ALBUM:
        //     return Object.assign({}, state, action.album.popularSong)
        default:
            return state;
    }
}

export default songsReducer;