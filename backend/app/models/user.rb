class User < ApplicationRecord
  # validate :password_digest,
    # presence: true
  validates :email,
    presence: true

  has_many :environments


end
