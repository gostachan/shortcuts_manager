class User < ApplicationRecord
  before_save { self.email.downcase! }
  # check: 仮想passwordカラムはバリデーションでも使用可能
  validates :password,
    presence: true,
    length: { minimum: 8 }

  # TODO: regexを理解する
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email,
    presence: true,
    length: { maximum: 255 },
    format: { with: VALID_EMAIL_REGEX },
    uniqueness: true

  has_many :environments
  has_secure_password
end
