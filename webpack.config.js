const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./source/js/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      //   {
      //   // Apply rule for .sass, .scss or .css files
      //   test: /\.(sa|sc|c)ss$/,
      //   // Set loaders to transform files.
      //   // Loaders are applying from right to left(!)
      //   // The first loader will be applied after others
      //   use: [
      //          {
      //            // This loader resolves url() and @imports inside CSS
      //            loader: "css-loader",
      //          },
      //          {
      //            // Then we apply postCSS fixes like autoprefixer and minifying
      //            loader: "postcss-loader"
      //          },
      //          {
      //            // First we transform SASS to standard CSS
      //            loader: "sass-loader",
      //            options: {
      //              implementation: require("sass")
      //            }
      //          }
      //        ]
      // }
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./source/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};
