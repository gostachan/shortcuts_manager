class ShortcutsController < ApplicationController
  def index
    user = User.first
    environments = user.environments
    shortcuts = []
    environments.each do |environment|
      environment.shortcuts.each do |shortcut|
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
  end
end
