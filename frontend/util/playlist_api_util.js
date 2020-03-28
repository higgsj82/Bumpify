export const getPlaylist = playlistId => {
    return $.ajax({
        url: `/api/playlists/${playlistId}`
    })
}

export const getPlaylists = () => {
    return $.ajax({
        url: '/api/playlists'
    })
}

export const createPlaylist = playlist => {
    return $.ajax({
        url: '/api/playlists',
        method: 'POST',
        data: { playlist: playlist }
    })
}