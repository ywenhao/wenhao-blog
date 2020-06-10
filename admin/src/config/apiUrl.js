let admin = '/admin/';
let defaultUrl = '/default/';

if (process.env.NODE_ENV === 'production') {
    admin = '/api/admin/';
    defaultUrl = '/api/default/';
}

const servicePath = {
    getArticleList: defaultUrl + 'getArticleList',    //  首页文章列表接口
    getArticleById: defaultUrl + 'getArticleById/',   // 文章详细页内容接口 ,需要接收参数
    getTypeInfo: defaultUrl + 'getTypeInfo',          // 文章分类信息
    getListById: defaultUrl + 'getListById/',         // 根据类别ID获得文章列表
    searchArticleList: defaultUrl + 'searchArticleList/',         // 根据类别ID获得文章列表
    checkLoginStatus: admin + 'index', // 检查登录状态
    checkLogin: admin + 'checkLogin',  //  检查用户名密码是否正确
    checkOut: admin + 'loginOut',
    addArticle: admin + 'addArticle',
    delArticle: admin + 'delArticle',
};

export default servicePath;
