Rails.application.routes.draw do
  get 'swifts/index'
  get 'cs/index'
  get 'pythons/index'
  get 'phps/index'
  get 'javascripts/index'
  get 'rubys/index'
  get 'csss/index'
  get 'htmls/index'
  get 'homes/index'
  devise_for :users
  root to: "homes#index"
  # resources :users, only: [:index, :new, :show]
  resources :homes,        only: [:index, :new, :create]
  resources :htmls,        only: [:index, :new]
  resources :csss,         only: [:index, :new]
  resources :rubys,        only: [:index, :new]
  resources :javascripts,  only: [:index, :new]
  resources :phps,         only: [:index, :new]
  resources :pythons,      only: [:index, :new]
  resources :cs,           only: [:index, :new]
  resources :swifts,       only: [:index, :new]
end
