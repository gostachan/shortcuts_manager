class UsersController < ApplicationController
  def show
    render json: {hoeg: "hoge", foo: "foo"}, status: :ok
  end
end
