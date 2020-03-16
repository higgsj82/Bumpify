import * as PlaylistAPIUtils from '../util/playlist_api_util';

// export const GET_ALL_SONGS = 'GET_ALL_SONGS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';

const receivePlaylist = playlist => {
    return {
        type: RECEIVE_PLAYLIST,
        playlist
    }
}

const receivePlaylists = playlists => {
    return {
        type: RECEIVE_PLAYLISTS,
        playlists
    }
}

export const getPlaylist = playlist => dispatch => {
    return PlaylistAPIUtils.getPlaylist(playlist.id)
    .then(
        playlist => dispatch(receivePlaylist(playlist))
    )
}

export const getAllPlaylists = () => dispatch => {
    return PlaylistAPIUtils.getAllPlaylists()
    .then(
        playlists => dispatch(receivePlaylists(playlists))
    )
}

export const createPlaylist = name => dispatch => {
    return PlaylistAPIUtils.createPlaylist(name)
    .then(
        name => dispatch(receivePlaylist(name))
    )
}