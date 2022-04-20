const HtmlWebPackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
 
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
  }, plugins: [ 
    new HtmlWebPackPlugin({ 
    template: "./src/index.html", 
    filename: "./index.html" 
  }), new MiniCssExtractPlugin()
] 
};