const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/admin", {
      target: "http://127.0.0.1:7001",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/default", {
      target: "http://127.0.0.1:7001",
      changeOrigin: true
    })
  );
};
