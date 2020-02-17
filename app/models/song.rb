# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  song_name  :string           not null
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
    belongs_to :album
    has_one :artist, through: :album
    has_many :likes, as: :likeable
    has_one_attached :track
end
