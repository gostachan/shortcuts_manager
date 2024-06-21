class Shortcut < ApplicationRecord
  validates :environment_id,
    presence: true
  validates :command,
    presence: true
  validates :key_binding,
    presence: true
  validates :condition,
    presence: true

  belongs_to :environment
end
