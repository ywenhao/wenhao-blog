const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/admin", {
      target: "http://127.0.0.1:7001",
      changeOrigin: true
    })
  );
  app.use(
    createProxyMiddleware("/default", {
      target: "http://127.0.0.1:7001",
      changeOrigin: true
    })
  );
};
