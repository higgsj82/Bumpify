popular_songs = @artist.songs.order('RANDOM()').limit(5).to_a
json.artist do
    json.partial! "api/artists/artist", artist: @artist
    json.album_ids @artist.albums.pluck(:id)
    json.song_ids popular_songs.pluck(:id)
end
# albums
json.albums @artist.albums
# songs

popular_songs.each do |song|
    json.popularSongs do
        json.set! song.id do
            json.extract! song, :id, :song_name
            json.trackUrl url_for song.track
        end
    end
end
