class Api::MainRootController < ApplicationController
    def root_data
        @artists = Artist.all.order('RANDOM()').limit(5).to_a
        @albums = Album.all.order('RANDOM()').limit(5).to_a
    end
end