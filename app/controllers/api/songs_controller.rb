class Api::SongsController < ApplicationController
    def index
        # @songs = AWS::S3::Bucket.find(bumpify-dev).objects
        @songs = Song.all
    end

    def show
        @song = Song.find(params[:id])
    end

    private 
    
    def song_params
        params.require(:song).permit(:song_name, :album_id, :track)
    end
end
