class EnvironmentsController < ApplicationController

  def index
    if current_user
      environments = []
      current_user.environments.order(id: :desc).each do |environment|
        environments << environment
      end
      render json: { environments: environments }, status: 200
    else
      render json: { message: "Authorization is required" }, status: 401
    end
  end

  def create
    user = current_user
    # environment = Environment.new(name: environment_info[:name])
    environment = user.environments.new(name: environment_info[:name])
    if environment.save
      render json: {environment: environment}, status: 201
    else
      render json: { error: environment.errors.messages }, status: 400
    end
  end

  def update
    user = current_user
    environment = Environment.find_by(id: params[:id])


    if user.id != environment.user_id
      render json: { error: "Unauthorized",
                     message: "Invalid or missing authentication credentials." },
             status: 403
      return
    end

    environment.name = environment_info[:name]
    if environment.save
      render json: { message: "Shortcut infomation updated successfully.",
                     environment: environment },
             status: 200
    else
      render json: { message: "Bad request." }, status: 400
    end

  end

  private

    def environment_info
      params.require(:environment_info).permit(:name)
    end


end
