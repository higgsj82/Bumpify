class Api::AlbumsController < ApplicationController
    def show
        @album = Album.find(params[:id])
    end

    private 

    def album_params 
        params.require(:album).permit(:album_name, :artist_id, :album_cover)
    end
end
