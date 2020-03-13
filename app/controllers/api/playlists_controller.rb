class Api::PlaylistsController < ApplicationController
    def create
        @playlist = Playlist.new(playlist_params)

        if @playlist.save
            render :show
        else
            render json: @playlist.errors.full_messages, status: 401
        end
    end

    def index
        @playlists = Playlist.all
    end
    
    def show
        @playlist = Playlist.find(params[:id])
    end

    private
    
    def playlist_params
        params.require(:playlist).permit(:name, :user_id)
    end
end
