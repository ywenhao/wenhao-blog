'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await this.app.mysql.get('blog_content', {});
  }
  async getArticleList() {
    const keyword = this.ctx.query.keyword;
    let sql;
    if (keyword) {
      sql = 'SELECT article.id as id,' +
          'article.title as title,' +
          'article.introduce as introduce,' +
          'article.addTime as addTime,' +
          'article.view_count as view_count ,' +
          'type.typeName as typeName ' +
          'FROM article LEFT JOIN type ON article.type_id = type.id WHERE title LIKE "%' + keyword + '%" OR introduce LIKE "%' + keyword + '%" OR article_content LIKE "%' + keyword + '%" ORDER BY addTime DESC';
    } else {
      sql = 'SELECT article.id as id,' +
          'article.title as title,' +
          'article.introduce as introduce,' +
          'article.addTime as addTime,' +
          'article.view_count as view_count ,' +
          'type.typeName as typeName ' +
          'FROM article LEFT JOIN type ON article.type_id = type.id';
    }
    const resList = await this.app.mysql.query(sql);
    const resType = await this.app.mysql.select('type');
    this.ctx.body = {
      code: 200,
      list: resList,
      type: resType,
    };
  }

  async getArticleById() {
    const id = this.ctx.params.id;

    const sql = 'SELECT article.id as id,' +
    'article.title as title,' +
    'article.introduce as introduce,' +
    'article.article_content as article_content,' +
    // "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime," +
    'article.addTime as addTime,' +
    'article.view_count as view_count ,' +
    'type.typeName as typeName ,' +
    'type.id as typeId ' +
    'FROM article LEFT JOIN type ON article.type_id = type.id ' +
    'WHERE article.id=' + id;

    const results = await this.app.mysql.query(sql);

    this.ctx.body = {
      code: 200,
      data: results,
    };
  }
  async getTypeInfo() {
    const result = await this.app.mysql.select('type');
    this.ctx.body = { code: 200, data: result };

  }
  // 根据类别ID获得文章列表
  async getListById() {
    const id = this.ctx.params.id;
    const sql = 'SELECT article.id as id,' +
        'article.title as title,' +
        'article.introduce as introduce,' +
        'article.addTime as addTime,' +
        'article.view_count as view_count ,' +
        'type.typeName as typeName ' +
        'FROM article LEFT JOIN type ON article.type_id = type.id ' +
        'WHERE type_id=' + id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { code: 200, data: result };

  }
}

module.exports = HomeController;
