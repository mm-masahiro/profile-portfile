const path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  module: {
    // weback only understand javascript, so we need to convert css to javascript by loader
    rules: [
      {
        test: /\.css$/,
        // Note! Order is from last to first
        use: [
          // inject css into dom
          'style-loader',
          // read css from css file
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      }
    ]
  },

  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "dist"),
    open: true
  }
}