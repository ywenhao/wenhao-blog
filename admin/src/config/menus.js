const menus = [
    {   SubMenu: false,
        title: '工作台',
        icon: 'pie-chart',
        path: '/index',
    },
    // {   SubMenu: false,
    //     title: '添加文章',
    //     icon: 'file-add',
    //     path: '/article/add',
    // },
    {   SubMenu: true,
        title: '文章管理',
        icon: 'profile',
        path: '/article',
        children: [
            {
                title: '添加文章',
                path: '/article/add',
            },
            {
                title: '文章列表',
                path: '/article/list',
            },
        ],
    },
    {
        SubMenu: false,
        title: '留言管理',
        icon: 'message',
        path: '/message',
    },
];

export default menus
