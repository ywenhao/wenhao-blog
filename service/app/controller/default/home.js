'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await this.app.mysql.get('blog_content', {});
    ctx.body = result;
  }
  async getArticleList() {

    const sql = 'SELECT article.id as id,' +
        'article.title as title,' +
        'article.introduce as introduce,' +
        'article.addTime as addTime,' +
        'article.view_count as view_count ,' +
        '.type.typeName as typeName ' +
        'FROM article LEFT JOIN type ON article.type_id = type.Id';

    const resList = await this.app.mysql.query(sql);
    const resType = await this.app.mysql.select('type');
    this.ctx.body = {
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
    'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
    'WHERE article.id=' + id;

    const results = await this.app.mysql.query(sql);

    this.ctx.body = {
      data: results,
    };
  }
}

module.exports = HomeController;
