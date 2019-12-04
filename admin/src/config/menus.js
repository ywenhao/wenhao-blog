const menus = [
    {   SubMenu: false,
        title: '工作台',
        icon: 'pie-chart',
        path: '/index',
        key: '1',
    },
    {   SubMenu: false,
        title: '添加文章',
        icon: 'file-add',
        path: '/article/add',
        key: '2',
    },
    {   SubMenu: true,
        title: '文章管理',
        icon: 'profile',
        key: 'sub1',
        children: [
            {
                title: '添加文章',
                key: '3',
                path: '/article/add',
            },
            {
                title: '文章列表',
                key: '4',
                path: '/article/list',
            },
        ],
    },
    {
        SubMenu: false,
        title: '留言管理',
        icon: 'message',
        path: '/message',
        key: '9',
    },
];

export default menus
