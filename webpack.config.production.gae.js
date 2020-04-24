const merge = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const baseConfig = require("./webpack.config.base.js");

module.exports = merge(baseConfig, {
  output: {
    path: `${__dirname}/nginx/www`,
    filename: "[name].js",
  },

  plugins: [
    new CopyPlugin([
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
});
