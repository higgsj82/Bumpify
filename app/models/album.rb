# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  album_name :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
    belongs_to :artist
    has_many :likes, as: :likeable
    has_one_attached :album_cover
end
