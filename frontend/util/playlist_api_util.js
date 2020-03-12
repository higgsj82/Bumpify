export const getPlaylist = playlistId => {
    return $.ajax({
        url: `/api/playlists/${playlistId}`
    })
}

export const createPlaylist = (name) => {
    return $.ajax({
        url: `/api/playlists/${playlistId}`,
        method: 'POST',
        data: { name }
    })
}