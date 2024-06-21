class ApplicationController < ActionController::API
  include SessionsHelper
  # SEARCH: 下のコードの書くとCookiesメソッドが利用できるようになるのはなぜか？
  include ActionController::Cookies
end
