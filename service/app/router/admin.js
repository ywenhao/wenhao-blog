'use strict';

module.exports = app => {
  const { router, controller } = app;
  const adminauth = app.middleware.adminauth();
  router.get('/admin/index', adminauth, controller.admin.main.index);
  router.get('/admin/loginOut', controller.admin.main.loginOut);
  router.post('/admin/addArticle', controller.admin.main.addArticle);
  router.post('/admin/delArticle', controller.admin.main.delArticle);
  router.post('/admin/checkLogin', controller.admin.main.checkLogin);
};
