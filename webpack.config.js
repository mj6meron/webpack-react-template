const HtmlWebPackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')
 
const htmlPlugin = new HtmlWebPackPlugin({ 
  template: "./src/index.html", 
  filename: "./index.html" 
}); 
 

module.exports = { 
  module: { 
    rules: [
      // PARSE JS FILES
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: { 
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: ["@babel/preset-react", "@babel/preset-env"],
          }
        } 
      },
      // PARSE CSS FILES
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // instead of style-loader
          'css-loader'
        ],
        exclude: /node_modules/
      }
    ] 
  },
  devServer: {
    proxy: { // proxy URLs to backend development server
      '/*': 'http://localhost:1337/',
      "secure": false, // had an expression which was resolving to true
    "logLevel": "debug",
    "changeOrigin": true
    },
    static: path.join(__dirname, 'dist'), // boolean | string | array | object, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    // ...
  }, plugins: [ 
    new HtmlWebPackPlugin({ 
    template: "./src/index.html", 
    filename: "./index.html" 
  }), new MiniCssExtractPlugin()
] 
};


//----------------------------------------------------------------------------------------------------------------
