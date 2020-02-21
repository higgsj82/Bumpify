import { combineReducers } from "redux";
import usersReducer from "../users/users_reducer";
import songsReducer from "../music/songs_reducer";
import artistsReducer from "../music/artists_reducer";
import albumsReducer from "../music/albums_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    artists: artistsReducer,
    albums: albumsReducer,
    songs: songsReducer
})

export default entitiesReducer;