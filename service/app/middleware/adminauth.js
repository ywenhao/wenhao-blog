'use strict';

module.exports = () => {
  return async function adminauth(ctx, next) {
    if (ctx.session.token) {
      await next();
    } else {
      ctx.body = { code: 999, data: '请重新登录' };
    }
  };
};
