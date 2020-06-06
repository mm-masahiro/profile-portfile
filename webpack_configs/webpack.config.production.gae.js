const merge = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const baseConfig = require("./webpack.config.base.js");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    path: path.join(__dirname, "../nginx/www"),
    filename: "[name].js",
  },

  plugins: [
    new CopyPlugin([
      {
        from: path.join(__dirname, "../src/index.html"),
        to: path.join(__dirname, "../public"),
      },
      // {
      //   from: path.join(__dirname, "../src/react.html"),
      //   to: path.join(__dirname, "../public"),
      // },
    ]),
  ],
});
