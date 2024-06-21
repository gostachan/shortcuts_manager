class EnvironmentsController < ApplicationController

  def index
    if current_user
      environments = []
      current_user.environments.each do |environment|
        environments << environment.name
      end
      render json: { environments: environments }, status: 200
    else
      render json: { message: "Authorization is required" }, status: 401
    end
  end
end
