import * as AudioAPIUtils from '../util/audio_api_utils';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

const receiveAlbum = album => {
    return {
        type: RECEIVE_ALBUM,
        album
    }
}

const receiveAlbums = albums => {
    return {
        type: RECEIVE_ALBUMS,
        albums
    }
}

export const getAlbum = albumId => dispatch => {
    return AudioAPIUtils.getAlbum(albumId)
    .then(
        album => dispatch(receiveAlbum(album))
    )
}

export const getAllAlbums = () => dispatch => {
    return AudioAPIUtils.getAllAlbums()
        .then(
            albums => dispatch(receiveAlbums(albums))
        )
}