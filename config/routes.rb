Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:show]
    resources :albums, only: [:show]
    resources :songs, only: [:show, :index]
  end
  
  root "static_pages#root"
end
