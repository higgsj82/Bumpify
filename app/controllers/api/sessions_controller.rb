class Api::SessionsController < ApplicationController
    # before_action :ensure_logged_in, only: [:destroy]

    def create
        debugger
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )

        if @user
            login!(@user)
            render 'api/users/show';
        else
            render json: ['Invalid credentials.'], status: 401
        end
    end

    def destroy
        logout!
        render json: { message: 'Successfully logged out.' }
    end
end
