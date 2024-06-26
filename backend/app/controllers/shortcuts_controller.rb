class ShortcutsController < ApplicationController
  def index
    if current_user
      environments = current_user.environments.order(created_at: :desc)
      shortcuts = []
      environments.each do |environment|
        environment.shortcuts.order(id: :desc).each do |shortcut|
          data = {id:          shortcut.id,
                  favorite:    shortcut.favorite,
                  command:     shortcut.command,
                  keybinding:  shortcut.key_binding,
                  when:        shortcut.condition,
                  environment: environment.name,
                }
          shortcuts << data
        end
      end
      render json: shortcuts, status: :ok
    else
      render json: { message: "Authorization is required" }, status: 401
    end
  end

  def create
    if (environment = Environment.find_by(id: shortcut_info[:environment_id]))
      if current_user.id == environment.user_id
        shortcut = environment.shortcuts.new
        shortcut.command = shortcut_info[:command]
        shortcut.key_binding = shortcut_info[:keybinding]
        shortcut.condition = shortcut_info[:when]
        if shortcut.save
          render json: { shortcut: shortcut }, status: 201
        else
          render json: { error: errors.message }, status: 400
        end
      else
        render json: { message: "Faled to create." }, status: 400
      end
    else
      render json: { message: "Environment not found." }, status: 400
    end
  end


  def update
    user = current_user
    shortcut = Shortcut.find_by(id: params[:id])


    if user.id != shortcut.environment.user_id
      render json: { error: "unauthorized",
                     message: "invalid or missing authentication credentials." },
             status: 403
      return
    end

    shortcut.favorite = shortcut_info[:favorite]
    if shortcut.save
      render json: { message: "shortcut infomation updated successfully.",
                     shortcut: shortcut },
             status: 200
    else
      render json: { message: "bad request." }, status: 400
    end

  end

  def destroy
    user = current_user
    shortcut = Shortcut.find_by(id: params[:id])
    if user.id != shortcut.environment.user_id
      render json: { error: "unauthorized",
                     message: "invalid or missing authentication credentials." },
             status: 403
      return
    end

    if shortcut.destroy
      render json: { message: "Shortcut deleted successfully" },
            status: 200
    else
      render json: { error: 'Faile to delete user',
                     message: shortcut.errors.full_messages },
             status: :unprocessable_entity
    end

  end




  private

  def shortcut_info
    params.require(:shortcut_info).permit(:command,
                                          :keybinding,
                                          :when,
                                          :environment_id,
                                          :favorite)
  end





end
