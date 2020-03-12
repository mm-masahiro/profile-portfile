// this file tells postcss to use tailwind and autoprefixer
module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")
  ]
}