import * as AudioAPIUtils from '../util/audio_api_utils';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST'

const recieveArtist = artist => {
    return {
        type: RECEIVE_ARTIST,
        artist
    }
}

export const getArtist = artist => dispatch => {
    return AudioAPIUtils.getArtist(artist.id)
    .then(
        artist => dispatch(recieveArtist(artist))
    )
}