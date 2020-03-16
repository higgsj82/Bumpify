import * as AudioAPIUtils from '../util/audio_api_utils';

// export const GET_ALL_SONGS = 'GET_ALL_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';

const receiveSong = song => {
    return {
        type: RECEIVE_SONG,
        song
    }
}

const receiveSongs = songs => {
    return {
        type: RECEIVE_SONGS,
        songs
    }
}

export const getSong = song => dispatch => {
    return AudioAPIUtils.getSong(song.id)
    .then(
        song => dispatch(receiveSong(song))
    )
}

export const getAllSongs = () => dispatch => {
    return AudioAPIUtils.getAllSongs()
    .then(
        songs => dispatch(receiveSongs(songs))
    )
}