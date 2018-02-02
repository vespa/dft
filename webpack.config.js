const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: ["./src/js/app.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
  },
  resolve:{
      alias:{
        container: path.resolve(__dirname, "src/js/components/container/"),
        presentational: path.resolve(__dirname, "src/js/components/presentational/")
      }
  },
  module: {
    rules: [
      { 
        test: /\.json$/, 
        loader: "file-loader",
        options: {
          name: '[path][name].[ext]?[hash]',
        }   
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']          

      },
      {
        test: /\.js$/,
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
      template: "./src/index.html",
      filename: "./index.html"
    }),
    //new UglifyJsPlugin()
  ]
};