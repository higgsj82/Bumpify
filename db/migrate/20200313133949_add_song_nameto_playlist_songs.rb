class AddSongNametoPlaylistSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :playlist_songs, :song_name, :string
    add_index :playlist_songs, :song_name
  end
end
