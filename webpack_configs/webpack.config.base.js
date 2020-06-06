const path = require("path");

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: "development",

  // エントリーポイントの設定
  entry: {
    // main: path.join(__dirname, "../src/js/index.js"),
    app: path.join(__dirname, "../src/react/app.ts"),
  },

  // 出力の設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.join(__dirname, "../public"),
    // 出力ファイル名
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.scss|css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: true,
              importLoaders: 2,
            },
          },
          { loader: "postcss-loader" },
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
        test: /\.ts|tsx?$/,
        loader: "ts-loader",
      },
    ],
  },

  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
  },
};
