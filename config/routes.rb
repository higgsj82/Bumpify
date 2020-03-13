Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:show, :index]
    resources :albums, only: [:show, :index]
    resources :songs, only: [:show, :index]
    resources :playlists, only: [:show, :create, :update, :index]
  end
  
  root "static_pages#root"
end
