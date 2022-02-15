const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/extension.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
  },
};
