import * as AudioAPIUtils from '../util/audio_api_utils';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST'
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS'

const recieveArtist = artist => {
    return {
        type: RECEIVE_ARTIST,
        artist
    }
}

const recieveArtists = artists => {
    return {
        type: RECEIVE_ARTISTS,
        artists
    }
}

export const getArtist = artistId => dispatch => {
    return AudioAPIUtils.getArtist(artistId)
    .then(
        artist => dispatch(recieveArtist(artist))
    )
}

export const getAllArtists = () => dispatch => {
    return AudioAPIUtils.getAllArtists()
        .then(
            artists => dispatch(recieveArtists(artists))
        )
}