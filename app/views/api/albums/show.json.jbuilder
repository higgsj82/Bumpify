json.partial! "api/albums/album", album: @album
json.song_ids @album.songs.pluck(:id)
json.songs @album.songs