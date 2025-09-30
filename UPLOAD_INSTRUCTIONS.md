# GitHub アップロード手順

## 重要: 必ずこの手順に従ってください

### 1. GitHubリポジトリをクリーンアップ
1. https://github.com/komi-kou/task3 にアクセス
2. すべてのファイルを削除（リポジトリを空にする）

### 2. ファイルをアップロード
1. 「Add file」→「Upload files」をクリック
2. このフォルダの内容をすべて選択してドラッグ&ドロップ:
   `/Users/komiyakouhei/Desktop/タスク管理ツール/task3-final/`
   
   以下のフォルダ/ファイルをすべて選択:
   - app/
   - components/
   - lib/
   - prisma/
   - public/
   - types/
   - すべての.json, .js, .mjs, .ts ファイル

### 3. [...nextauth]フォルダの処理
GitHubが[...nextauth]を正しくアップロードできない場合:
1. 一旦「nextauth-dynamic」のような名前でアップロード
2. アップロード後、GitHub上で名前を「[...nextauth]」に変更

### 4. 環境変数の確認（Render）
- DATABASE_URL: PostgreSQLのInternal URL
- NEXTAUTH_URL: https://task3-nfpy.onrender.com
- NEXTAUTH_SECRET: ランダムな32文字以上の文字列
- NODE_ENV: production
- NODE_VERSION: 20

### 5. RenderのRoot Directory
必ず**空欄**にしてください（何も入力しない）

これで確実に動作します。