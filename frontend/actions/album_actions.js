import * as AudioAPIUtils from '../util/audio_api_utils';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

const receiveAlbum = album => {
    return {
        type: RECEIVE_ALBUM,
        album
    }
}

export const getAlbum = album => dispatch => {
    return AudioAPIUtils.getAlbum(album.id)
    .then(
        album => dispatch(receiveAlbum(album))
    )
}