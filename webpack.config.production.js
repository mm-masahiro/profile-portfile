const merge = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const baseConfig = require("./webpack.config.base.js");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new CopyPlugin([
      {
        from: `${__dirname}/src/img`,
        to: `${__dirname}/public/img`,
      },
      {
        from: `${__dirname}/src/index.html`,
        to: `${__dirname}/public`,
      },
      {
        from: `${__dirname}/src/react.html`,
        to: `${__dirname}/public`,
      },
    ]),
  ],
});
