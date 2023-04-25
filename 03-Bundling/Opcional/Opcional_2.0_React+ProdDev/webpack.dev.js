common = require("./webpack.common.js"); //importamos webpack.common.js
const { merge } = require("webpack-merge"); //importamos merge de webpack-merge
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        //use: ["style-loader", "css-loader", "sass-loader"],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                exportLocalsConvention: "camelCase",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  //plugins: [
  // new MiniCssExtractPlugin({
  //   filename: "[name].[chunkhash].css",
  // }),
  //],
  devServer: {
    port: 8080,
    devMiddleware: {
      stats: "errors-only",
    },
  },
});
