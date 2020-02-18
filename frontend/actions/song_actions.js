import * as AudioAPIUtils from '../util/audio_api_utils';

// export const GET_ALL_SONGS = 'GET_ALL_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

const receiveSong = song => {
    return {
        type: RECEIVE_SONG,
        song
    }
}

export const getSong = songId => dispatch => {
    return AudioAPIUtils.getSong(songId)
    .then(song => dispatch(receiveSong(song)))
}

