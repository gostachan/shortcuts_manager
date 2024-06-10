Rails.application.routes.draw do
  resources :users
  resources :environments
  resources :shortcuts
  get "test", to: "application#test"
end
