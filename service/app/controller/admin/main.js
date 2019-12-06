'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    this.ctx.body = { code: 200, data: '登录状态验证成功' };
    // const result = app.jwt.verify(this.ctx.session.token, app.config.jwt.secret);
    // console.log(result.userName);
  }
  async addArtcile() {
    const type_id = this.ctx.request.body.selectedType;
    const title = this.ctx.request.body.articleTitle;
    const introduce = this.ctx.request.body.introducemd;
    const article_content = this.ctx.request.body.articleContent;
    const addTime = this.ctx.request.body.updateDate;
    const sql = `INSERT INTO article(type_id, title, introduce, article_content, addTime) VALUES (${type_id}, '${title}', '${introduce}', '${article_content}', '${addTime}')`;
    const res = await this.app.mysql.query(sql);
    if (res.affectedRows > 0) {
      this.ctx.body = { code: 200, data: '添加成功' };
    } else {
      this.ctx.body = { code: 999, data: '添加失败' };
    }
  }

  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    const sql = `SELECT userName FROM admin_user WHERE userName = '${userName}' AND password = '${password}'`;
    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      // const openId = new Date().getTime();
      // this.ctx.session.openId = { openId };
      // this.ctx.body = { data: '登录成功', openId };
      const token = this.app.jwt.sign({ userName }, this.app.config.jwt.secret);
      this.ctx.session.token = token;
      this.ctx.body = { code: 200, data: '登录成功', token };
    } else {
      this.ctx.body = { code: 999, data: '账号或密码错误' };
    }
  }

  async loginOut() {
    this.ctx.session.token = '';
    if (!this.ctx.session.token) {
      this.ctx.body = { code: 200, data: '退出登录成功' };
    } else {
      this.ctx.body = { code: 999, data: '退出登录失败' };
    }
  }
}

module.exports = MainController;
