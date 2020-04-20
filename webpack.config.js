// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: "development",

  // エントリーポイントの設定
  entry: {
    main: `${__dirname}/src/js/index.js`,
    app: `${__dirname}/src/react/app.tsx`,
  },

  // 出力の設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/public`,
    // 出力ファイル名
    filename: "[name].js",
  },

  // webpack-dev-serverを立ち上げた時のドキュメントルートを設定
  // ここではdistディレクトリのindex.htmlにアクセスするよう設定している
  devServer: {
    contentBase: path.join(__dirname, "public"),
    filename: "[name].js",
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: true,
              importLoaders: 2,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(gif|png|jpeg|svg|jpg)$/,
        loader: "url-loader",
      },
      {
        test: /\.jsx|js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },

  resolve: {
    extensions: [".jsx", ".js", "tsx", "ts"],
  },

  plugins: [
    new CopyPlugin([
      {
        from: `${__dirname}/src/img`,
        to: `${__dirname}/public/img`,
      },
      {
        from: `${__dirname}/src/hobby.html`,
        to: `${__dirname}/public`,
      },
      {
        from: `${__dirname}/src/index.html`,
        to: `${__dirname}/public`,
      },
      {
        from: `${__dirname}/src/job.html`,
        to: `${__dirname}/public`,
      },
      {
        from: `${__dirname}/src/react.html`,
        to: `${__dirname}/public`,
      },
      {
        from: `${__dirname}/src/student.html`,
        to: `${__dirname}/public`,
      },
    ]),
  ],
};
