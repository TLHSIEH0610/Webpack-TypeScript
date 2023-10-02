const path = require("path");
//generate HTML and inject into bundle HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");
//extracts CSS files and bundles them into a single bundle.css file
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//reduce the size of CSS files by removing unused CSS
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//js minimizer
const TerserPlugin = require("terser-webpack-plugin");
//copy application assets from the development folder into the build folder
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "a-ts-project",
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/images", to: "images" }],
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};
