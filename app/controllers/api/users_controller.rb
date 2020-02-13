class Api::UsersController < ApplicationController
    def create
        debugger
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end
    
    def update
        @user = User.find(params[:id])
        
        if @user && @user.(user_params)
            render :show
        elsif !@user
            render json: ['User information not found'], status: 400
        else
            render json: @user.errors.full_messages, status: 401
        end
    end
    
    def show
        @user = User.find(params[:id])
    end
    
    def destroy
        @user = User.find(params[:id])
        
        if @user
            @user.destroy
            render :show
        else
            render ['User not found']
        end
    end
    
    private
    
    def user_params
        params.require(:user).permit(:email, :password, :preferred_name, :DOB, :gender)
    end
end
