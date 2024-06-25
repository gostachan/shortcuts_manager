class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: login_info[:email].downcase)
    if @user&.authenticate(login_info[:password])
      remember @user
      login_info[:isChecked] ? remember(@user) : forget_cookies(@user)
      login @user
      render json: { user: @user }, status: 200
    else
      error_message = "Invalid email or password. Please try again."
      render json: { error: error_message}, status: 422
    end

  end

  def destroy
    logout if logged_in?
    render json: { message: "Logged out successfully" }, status: 200
  end

  def logged_in
    render json: {status: logged_in? }, status: 200
  end

  private

    def login_info
      params.require(:login_info).permit(:email, :password, :isChecked)
    end
end
