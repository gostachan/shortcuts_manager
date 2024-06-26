User.create!(
  password:              "hogehoge",
  password_confirmation: "hogehoge",
  email:                 "test@example.com"
)


env_names = %w[ OS chrome tmux vim VSCode ]

env_names.each do |env_name|
  Environment.create!(
    user_id: 1,
    name:    env_name
  )
end


shortcuts = [
  { environment_id: 1,
    command:        "ウィンドウを右に",
    key_binding:    "ctrl shift .",
    condition:      "-",
  },
  { environment_id: 1,
    command:        "ウィンドウを左に",
    key_binding:    "ctrl shift ,",
    condition:      "-",
  },
  { environment_id: 1,
    command:       "ミッションコントロール",
    key_binding: "ctrl shift j",
    condition: "-",
  },
  { environment_id: 1,
    command:        "コピー",
    key_binding:    "cmd c",
    condition:      "文字選択時",
  },
  { environment_id: 1,
    command:        "ペースト",
    key_binding:    "cmd v",
    condition:      "文字入力時",
  },
  { environment_id: 1,
    command:        "デリート",
    key_binding:    "ctrl h",
    condition:      "文字入力時",
  },
  { environment_id: 1,
    command:        "左 矢印キー",
    key_binding:    "cmd h",
    condition:      "-",
  },
  { environment_id: 1,
    command:        "下 矢印キー",
    key_binding:    "cmd j",
    condition:      "-",
  },
  { environment_id: 1,
    command:        "上 矢印キー",
    key_binding:    "cmd k",
    condition:      "-",
  },
  { environment_id: 1,
    command:        "右 矢印キー",
    key_binding:    "cmd l",
    condition:      "-",
  },
  { environment_id: 1,
    command:        "全選択",
    key_binding:    "cmd a",
    condition:      "-",
  },
  { environment_id: 2,
    command:        "タブを閉じる",
    key_binding:    "ctrl w",
    condition:      "-",
  },
  { environment_id: 2,
    command:        "新しいタブを開く",
    key_binding:    "ctrl n",
    condition:      "-",
  },
  { environment_id: 2,
    command:        "右タブに移動",
    key_binding:    "ctrl .",
    condition:      "-",
  },
  { environment_id: 2,
    command:        "左タブに移動",
    key_binding:    "ctrl ,",
    condition:      "-",
  },
  { environment_id: 2,
    command:        "スーパーリロード",
    key_binding:    "ctrl z",
    condition:      "-",
  },
  { environment_id: 2,
    command:        "タブを閉じる",
    key_binding:    "ctrl w",
    condition:      "-",
  },
  { environment_id: 3,
    command:        "プレフィックスキー",
    key_binding:    "ctrl k",
    condition:      "-",
  },
  { environment_id: 3,
    command:        "画面を縦に分割",
    key_binding:    "ctrl k  ctrl u",
    condition:      "-",
  },
  { environment_id: 3,
    command:        "画面を横に分割",
    key_binding:    "ctrl k  u",
    condition:      "-",
  },
  { environment_id: 4,
    command:        "ノーマルモード",
    key_binding:    "jk",
    condition:      "-",
  },
  { environment_id: 5,
    command:        "ターミナルに移動",
    key_binding:    "cmd k  cmd o",
    condition:      "-",
  },
  { environment_id: 5,
    command:        "ターミナルを閉じる",
    key_binding:    "cmd k  cmd o",
    condition:      "ターミナルにカーソルがある時",
  },
  { environment_id: 5,
    command:        "ディレクトリツリーに移動",
    key_binding:    "cmd k  cmd l",
    condition:      "-",
  },
  { environment_id: 5,
    command:        "ディレクトリツリーを閉じる",
    key_binding:    "cmd k  cmd l",
    condition:      "ディレクトリツリーにカーソルがある時",
  },
  { environment_id: 5,
    command:        "上に移動",
    key_binding:    "k",
    condition:      "ディレクトリツリーにカーソルがある時",
  },
  { environment_id: 5,
    command:        "下に移動",
    key_binding:    "j",
    condition:      "ディレクトリツリーにカーソルがある時",
  },
  { environment_id: 5,
    command:        "カーソルのディレクトリにディレクトリを作成",
    key_binding:    "d",
    condition:      "ディレクトリツリーにカーソルがある時",
  },
  { environment_id: 5,
    command:        "カーソルのディレクトリ、ファイルを削除",
    key_binding:    "cmd delete",
    condition:      "ディレクトリツリーにカーソルがある時",
  },
  { environment_id: 5,
    command:        "エディタを閉じる",
    key_binding:    "ctrl w",
    condition:      "エディタにカーソルがある時",
  },
  { environment_id: 5,
    command:        "右のエディタに移動",
    key_binding:    "ctrl .",
    condition:      "エディタにカーソルがある時",
  },
  { environment_id: 5,
    command:        "左のエディタに移動",
    key_binding:    "ctrl ,",
    condition:      "エディタにカーソルがある時",
  },
  { environment_id: 5,
    command:        "エディタを縦に分割",
    key_binding:    "ctrl k  ctrl u",
    condition:      "エディタにカーソルがある時",
  },
  { environment_id: 5,
    command:        "ファイル検索を開く",
    key_binding:    "ctrl l",
    condition:      "-",
  },
]

shortcuts.each do |shortcut|
  Shortcut.create!(
    environment_id: shortcut[:environment_id],
    command:        shortcut[:command],
    key_binding:    shortcut[:key_binding],
    condition:      shortcut[:condition],
    favorite:       false
  )
end
