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
