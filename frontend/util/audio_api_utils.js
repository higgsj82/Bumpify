export const getAllSongs = () => {
    return $.ajax({
        url: '/api/songs/'
    })
}

export const getSong = songId => {
    return $.ajax({
        url: `/api/songs/${songId}`
    })
}

export const getArtist = artistId => {
    return $.ajax({
        url: `/api/artists/${artistId}`
    })
}

export const getAlbum = albumId => {
    return $.ajax({
        url: `/api/albums/${albumId}`
    })
}