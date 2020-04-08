json.extract! song, :id, :song_name, :track
json.artist song.artist
json.artistId song.artist.id
json.album song.album
json.albumId song.album.id
json.albumCover url_for(song.album.album_cover)