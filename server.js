/* eslint-disable import/no-extraneous-dependencies, no-console, comma-dangle */
const webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  config = require('./webpack.config.js'),
  co = require('co');

const PORT = 8091;
const BIND_IP = '0.0.0.0';

const start = () => co(function* () {
  const server = new WebpackDevServer(
    webpack(config),
    {
      contentBase: 'build/',
      publicPath: '/',
      hot: true,
      stats: {
        colors: true,
      }
    }
  );
  
  yield new Promise((resolve, reject) =>
    void server.listen(
      PORT,
      BIND_IP,
      err => void (err ? reject(err) : resolve())
    )
  );
  console.log(`Server is listening on port ${PORT}`);
});

co(function* () {
  try {
    yield start();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
