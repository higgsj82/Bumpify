class Playlist < ApplicationRecord
    belongs_to :user
    has_many :songs
    has_many :follows, as: :followable
end
