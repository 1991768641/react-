const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:9000',
      changeOrigin: true,
    })
  );
  app.use(
    '/ajax',
    proxy({
      target: 'https://webservice.juanpi.com',
      changeOrigin: true,
      pathRewrite: {'^/ajax': ''}
    })
  );
  app.use(
    '/api3',
    proxy({
      target:'https://m.juanpi.com',
      changeOrigin:true
    })
  )
};