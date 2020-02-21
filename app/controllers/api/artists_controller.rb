class Api::ArtistsController < ApplicationController
    def index 
        @artists = Artist.all
    end
    
    def show
        @artist = Artist.find(params[:id])
    end

    private

    def artist_params
        params.require(:artist).permit(:artist_name, :bio)
    end
end
