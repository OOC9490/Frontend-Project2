const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./source/js/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./source/index.html",
      filename: "./index.html"
    })
  ]
};
