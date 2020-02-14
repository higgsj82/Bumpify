class Follow < ApplicationRecord
    belongs_to :followable, polymorphic: true
end
