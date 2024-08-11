const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./main.js", // Entry point for index.html
    codeOfConduct: "./code-of-conduct.js" // Separate entry for code-of-conduct.html
  },
  output: {
    filename: "[name].js", // Output [name] allows different files for each entry point
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      chunks: ["main"], // Include only the main chunk
    }),
    new HtmlWebpackPlugin({
      template: "./code-of-conduct.html",
      filename: "code-of-conduct.html",
      chunks: ["codeOfConduct"], // Include only the codeOfConduct chunk
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css", // Output CSS file named after the entry point
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "assets", to: "assets" }],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
};
