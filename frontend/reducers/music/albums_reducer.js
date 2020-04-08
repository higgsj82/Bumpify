import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from "../../actions/album_actions";
import { RECEIVE_ARTIST } from "../../actions/artist_actions";

const albumsReducer = (state = {}, action) => {
    debugger
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALBUM:
            return Object.assign({}, state, { [action.album.id]: action.album })
        case RECEIVE_ALBUMS:
            return Object.assign({}, state, action.albums)
        case RECEIVE_ARTIST:
            return Object.assign({}, state, action.artist.albums)
        default:
            return state;
    }
}

export default albumsReducer;