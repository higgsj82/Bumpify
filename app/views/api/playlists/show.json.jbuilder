json.extract! @playlist, :id, :name
json.song_ids @playlist.playlist_songs.pluck(:id)
@playlist.playlist_songs.each do |song|
    s = Song.find_by(song_name: song.song_name)
    json.set! song.id do 
        json.extract! s, :song_name, :track
    end
end