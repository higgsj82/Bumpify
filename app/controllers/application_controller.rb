class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?, :login!, :logout!

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user)
        @current_user = user 
        session[:session_token] = user.session_token
    end

    def logged_in?
        !!current_user
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        redirect_to api_session_url
    end

    def ensure_logged_in
        redirect_to api_session_url unless logged_in?
    end
end