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
    '/api2',
    proxy({
      target:'https://webservice.juanpi.com',
      changeOrigin:true,
      pathRewrite: {'^/api2': ''}
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