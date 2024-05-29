# original product

## プロダクト概要
ショートカットを楽に管理したい  
ショートカット好き向けの  
shortcuts manager (仮) は  
ショートカット管理アプリです.  

これは 楽にショートカットを管理 ことができ，  
CheatSheetやKeyCueとは違って，  
デフォルトではなくカスタムしたショートカットを管理する機能がある．  
また，頻繁に利用するショートカットだけを管理することができる．  

## プロダクト詳細

### 課題
1. CheatSheetなどのショートカット管理ツールはデフォルトで登録されているショートカットしか表示できない
1. KeyCueなどのリッチなショートカット管理アプリは，項目が多すぎて使いにくい
1. 異なるプラットフォームでのショートカットを一括管理できず，競合が発生してしまう(VSCode，ブラウザ，vim，OSなど)
1. 日本語に対応しているツールが少ない


### テーマ
ショートカット管理アプリ  
自分が利用するショートカットのみをシンプルに管理する  

### コンセプト
これまでのショートカット管理ツールはオプションが多すぎるが故に，軽く導入したい人には使いにくかった．  
一方で，アプリごとにショートカットを管理すると，OSとブラウザのショートカットが競合してしまうなどの課題があった．  

### ソリューション 
1. 自分が使っている最低限のショートカットのみを登録する機能
1. 複数のプラットフォームでのショートカットを一括でかつシンプルに管理する
1. ショートカット登録の際に競合を警告する

### ペルソナ
#### ペルソナ1：自分
**年齢**
20歳

**アプリの使用理由**
既存のアプリではカスタムしたショートカットを登録できない  
登録できるものは，英語版かつ課金制が多くハードルが高い  
異なるプラットフォーム間のショートカットを一括で管理するアプリがなく，競合を発生させては変更してを繰り返している  

**ショートカット使用頻度**
ほぼ全てのツールを自分好みにカスタマイズしている  
（Neovim,Tmux,VSCode,Chrome,macOSなど）

### 機能
#### 必須
* ショートカット登録
* ショートカット削除
* 登録の際，競合が出たらアラート
* 使用していないキーセットを表示
* よく使うショートカットの登録
#### できたら良い
* デフォルトのショートカットがすでに登録されている機能
* ~/.config/nvim/init.vimなどのショートカット管理ファイルから一括で登録
* このアプリでショートカットを作成して，コンフィグファイルに入力するコードを作成する
* 覚えたいショートカットの登録
* ショートカットのクイズ
### 工夫する点 
* シンプルで楽にショートカットを登録できる
* 異なるプラットフォームでのショートカットの競合を検知できるように設計する
### このアプリの強み
* ショートカットを一括で管理できる
* 使用していないショートカットキーがわかりやすい
* 使用していないショートカットがわかりやすく，シンプルで使いやすい
### このアプリの弱点
* すでにショートカットを多用している人が，ショートカットを登録するのが大変