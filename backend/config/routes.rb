Rails.application.routes.draw do
  resources :users
  get "test", to: "users#test"
end
