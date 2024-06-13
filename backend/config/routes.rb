Rails.application.routes.draw do
  resources :users, onry: ["create"]
  resources :environments
  resources :shortcuts
  get "test", to: "application#test"
end
