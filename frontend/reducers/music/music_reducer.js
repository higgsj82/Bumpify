import { combineReducers } from "redux";
import songsReducer from "./songs_reducer";
import artistsReducer from "./artists_reducer";
import albumsReducer from "./albums_reducer";
import playlistReducer from "./playlist_reducer";


const musicReducer = combineReducers({
    artists: artistsReducer,
    albums: albumsReducer,
    songs: songsReducer,
    playlists: playlistReducer
})

export default musicReducer;