# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
    belongs_to :user
    has_many :playlist_songs
    has_many :follows, as: :followable
end
