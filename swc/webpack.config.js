const path = require('path');

module.exports = {
  entry: {
    main: "./src/main.ts"
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?[j|t]sx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
}
