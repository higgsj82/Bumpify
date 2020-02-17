class Api::ArtistsController < ApplicationController

    def artist_params
        params.require(:artist).permit(:artist_name, :bio)
    end
end
