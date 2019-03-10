const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vtdemo/dist/'
    : '/',
  configureWebpack: {   
    optimization: {
      providedExports: true,
      usedExports: true,
      sideEffects: true,
      concatenateModules: true,
      noEmitOnErrors: true,
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,  
        cacheGroups: {
          commons: {
            test: path.resolve(__dirname, '../node_modules'),
            chunks: 'all',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            name: 'common'
          }
        }
      },
    }
  }
}