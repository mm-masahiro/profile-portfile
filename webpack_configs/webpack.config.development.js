const path = require("path");
const merge = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const baseConfig = require("./webpack.config.base.js");

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: path.join(__dirname, "../public"),
    openPage: "index.html",
    filename: "[name].js",
    historyApiFallback: {
      rewrites: [{ from: /^\/*/, to: "./index.html" }],
    },
    port: 8080,
  },

  plugins: [
    new CopyPlugin([
      {
        from: path.join(__dirname, "../src/img"),
        to: path.join(__dirname, "../public/img"),
      },
      {
        from: path.join(__dirname, "../src/index.html"),
        to: path.join(__dirname, "../public"),
      },
    ]),
  ],
});
