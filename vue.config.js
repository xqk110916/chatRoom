module.exports = {
  devServer: {
    proxy: {
      '/socket.io': {
        target: 'http://172.29.32.122:3000',
        ws: true,
        changeOrigin: true
      },
      'sockjs-node': {
        target: 'http://172.29.32.122:3000',
        ws: false,
        changeOrigin: true
      },
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '././' : '/'
}