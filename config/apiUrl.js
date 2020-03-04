const ipUrl = 'https://blogapi.cocoku.xyz/api/default/';
// const ipUrl = 'http://127.0.0.1:7001/default/';

const servicePath = {
    getArticleList: ipUrl + 'getArticleList',    //  首页文章列表接口
    getArticleById: ipUrl + 'getArticleById/',   // 文章详细页内容接口 ,需要接收参数
    getTypeInfo: ipUrl + 'getTypeInfo',          // 文章分类信息
    getListById: ipUrl + 'getListById/',         // 根据类别ID获得文章列表
};
export default servicePath;
