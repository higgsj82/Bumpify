json.extract! @playlist, :id, :name, :user

json.playlist_songs do
    @playlist.playlist_songs.each do |song|
        s = Song.find_by(song_name: song.song_name)
        json.set! song.id do 
            json.extract! s, :song_name, :track
        end
    end
end