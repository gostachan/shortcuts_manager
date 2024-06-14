Rails.application.routes.draw do
  resources :users,        onry: ["create"]
  resources :environments, except: ["get"]
  resources :shortcuts,    except: ["get"]
  post   "/login",  to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
