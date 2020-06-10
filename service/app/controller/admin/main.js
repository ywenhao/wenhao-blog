'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    this.ctx.body = { code: 200, data: '登录状态验证成功' };
    // const result = app.jwt.verify(this.ctx.session.token, app.config.jwt.secret);
    // console.log(result.userName);
  }
  async addArticle() {
    const articleId = this.ctx.request.body.articleId;
    const type_id = this.ctx.request.body.selectedType;
    const title = this.ctx.request.body.articleTitle;
    const introduce = this.ctx.request.body.introducemd;
    const article_content = this.ctx.request.body.articleContent;
    const addTime = this.ctx.request.body.createDate;
    const update_time = this.ctx.request.body.updateDate;
    // let sql;
    let res;
    if (articleId) {
      // sql = `UPDATE article SET type_id = ${type_id}, title = '${title}', introduce = '${introduce}', article_content = '${article_content}', update_time = '${update_time}' WHERE id = ${articleId}`;
      res = await this.app.mysql.update('article', { id: articleId, type_id, title, introduce, article_content, update_time });
    } else {
      // sql = `INSERT INTO article(type_id, title, introduce, article_content, addTime) VALUES (${type_id}, '${title}', '${introduce}', '${article_content}', '${addTime}')`;
      res = await this.app.mysql.insert('article', { type_id, title, introduce, article_content, addTime });
    }
    // const res = await this.app.mysql.query(sql);
    if (res.affectedRows > 0) {
      this.ctx.body = { code: 200, data: '操作成功' };
    } else {
      this.ctx.body = { code: 999, data: '操作失败' };
    }
  }
  async delArticle() {
    const id = this.ctx.request.body.id;
    // const sql = `DELETE FROM article WHERE id = ${id}`;
    // const res = await this.app.mysql.query(sql);
    const res = await this.app.mysql.delete('article', { id });
    if (res.affectedRows > 0) {
      this.ctx.body = { code: 200, data: '操作成功' };
    } else {
      this.ctx.body = { code: 999, data: '操作失败' };
    }
  }
  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    // const sql = `SELECT userName FROM admin_user WHERE userName = '${userName}' AND password = '${password}'`;
    // const res = await this.app.mysql.query(sql);
    const res = await this.app.mysql.select('admin_user', { userName, password });
    if (res.length > 0) {
      // const openId = new Date().getTime();
      // this.ctx.session.openId = { openId };
      // this.ctx.body = { data: '登录成功', openId };
      const token = this.app.jwt.sign({ userName }, this.app.config.jwt.secret, { expiresIn: 60 * 60 * 2 });
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
