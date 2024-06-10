class ApplicationController < ActionController::API
  def test
    render json: {test: "hello next.js"}, status: :ok
  end
end
