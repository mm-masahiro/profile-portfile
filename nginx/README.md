# Nginx Custom Runtime for App Engine

## Details

+ `app.yaml` - App Engineの設定ファイル。runtimeをcustomeにしてアプリケーションを動作させる。
+ `Dockerfile` - Dockerfile。GAEにデプロイするにはDockerコンテナにする必要があるため。
+ `nginx.conf` - ngixの設定ファイル
+ `www/` - nginxによってサーブされるフォルダ。