User.create!(
  password:              "hogehoge",
  password_confirmation: "hogehoge",
  email:                 "test@examole.com"
)

5.times do |i|
  Environment.create!(
    user_id: 1,
    name:    "environment#{i}"
  )
end

5.times do |env_i|
  5.times do |shortcut_i|
    Shortcut.create!(
      environment_id: env_i + 1,
      command:     "env#{env_i} shortcut#{shortcut_i}",
      key_binding: "env#{env_i} shortcut#{shortcut_i}",
      condition:   "env#{env_i} shortcut#{shortcut_i}",
      favorite:    (shortcut_i % 2 == 0 ? true : false),
    )
  end
end
