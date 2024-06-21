require "test_helper"

class UsersLoginTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:alice)
  end

  test "login with valid email and invalid password information" do
    post login_path, params: { login_info: { email: @user.email,
                                             password: "invalid" } }
    assert_not is_logged_in?
    assert_response 422
  end

  test "login with valid information followed by logout" do
    post login_path, params: { login_info: { email: @user.email,
                                             password: "password" } }
    assert is_logged_in?
    assert_response 200
    delete logout_path
    assert_not is_logged_in?
  end
end
