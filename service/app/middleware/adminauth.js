'use strict';

module.exports = () => {
  return async function adminauth(ctx, next) {
    const token = ctx.session.token;
    let nex = false;
    if (token) {
      ctx.app.jwt.verify(token, ctx.app.config.jwt.secret, err => {
        if (err) {
          ctx.body = { code: 999, data: '请重新登录' };
        } else {
          nex = true;
        }
      });

      nex && await next();

    } else {
      ctx.body = { code: 999, data: '请重新登录' };
    }
  };
};
