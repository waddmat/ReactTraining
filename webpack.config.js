module.exports = {
  entry: './public/app.jsx',
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      GreeterContainer: 'public/components/GreeterContainer.jsx',
      GreeterOutput: 'public/components/GreeterOutput.jsx',
      GreeterInput: 'public/components/GreeterInput.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
