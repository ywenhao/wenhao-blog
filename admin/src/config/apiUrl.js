const ipUrl = '/admin/';

const servicePath = {
    // getArticleList: ipUrl + 'getArticleList',    //  首页文章列表接口
    // getArticleById: ipUrl + 'getArticleById/',   // 文章详细页内容接口 ,需要接收参数
    // getTypeInfo: ipUrl + 'getTypeInfo',          // 文章分类信息
    // getListById: ipUrl + 'getListById/',         // 根据类别ID获得文章列表
    checkLoginStatus: ipUrl + '/index', // 检查登录状态
    checkLogin: ipUrl + 'checkLogin',  //  检查用户名密码是否正确
    checkOut: ipUrl + 'loginOut',
};
export default servicePath;
