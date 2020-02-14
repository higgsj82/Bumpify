class Album < ApplicationRecord
    belongs_to :artist
    has_many :likes, as: :likeable
end
