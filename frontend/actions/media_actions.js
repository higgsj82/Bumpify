export const UPDATE_CURRENT_SONG = 'UPDATE_CURRENT_SONG'
export const PLAY_SONG = 'PLAY_SONG'
export const PAUSE_SONG = 'PAUSE_SONG'

export const updateCurrentSong = song => {
    return{
        type: UPDATE_CURRENT_SONG,
        song
    }
}

const playSong = song => {
    return {
        type: PLAY_SONG,
        song
    }
}

const pauseSong = () => {
    return {
        type: PAUSE_SONG
    }
}

