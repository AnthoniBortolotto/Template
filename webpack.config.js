const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    home: path.resolve(__dirname, './src/templates/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpg|svg|png$/,
        exclude: [/node_modules/],
        use: ['url-loader']
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: path.resolve(__dirname,'./src/templates/index.html'),
      filename: path.resolve(__dirname,'./dist/index.html')
    })
  ],
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, './dist'),
    compress: true,
    historyApiFallback: true,
  }

}