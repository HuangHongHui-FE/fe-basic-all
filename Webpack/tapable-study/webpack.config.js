const HtmlWebpackPlugin = require("html-webpack-plugin");

const MyPlugin = require("./plugin");

const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      minify: false,
    }),
    new MyPlugin(),
  ],
};
