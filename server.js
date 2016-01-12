const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const PORT = 6061;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  https: false,
  historyApiFallback: true
}).listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at localhost:${PORT}`);
});
