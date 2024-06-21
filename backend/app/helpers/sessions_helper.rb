module SessionsHelper
  def login(user)
    reset_session
    session[:user_id] = user.id
  end

  def current_user
    if session[:user_id]
      @current_user ||= User.find_by(id: session[:user_id])
    end
  end

  def logged_in?
    # TODO: current_user.any? これで動けば変更する
    !current_user.nil?
  end

  def logout
    # Question: session[:user_id] = nil ではなく reset_session を利用するメリットは
    reset_session
    @current_user = nil
  end
end
