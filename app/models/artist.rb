# == Schema Information
#
# Table name: artists
#
#  id          :bigint           not null, primary key
#  artist_name :string           not null
#  bio         :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Artist < ApplicationRecord
    has_many :albums
    has_many :songs, through: :albums
    has_many :follows, as: :followable
end
