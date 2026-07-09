const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './home',
  },
  {
    name: '仪表盘',
    path: '/dashboard',
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/workbench',
      },
      {
        name: '工作台',
        path: '/dashboard/workbench',
        component: './dashboard/workbench',
      },
      {
        name: '数据概览',
        path: '/dashboard/analysis',
        component: './dashboard/analysis',
      },
    ],
  },
  // {
  //   name: '系统管理',
  //   path: '/system',
  //   routes: [
  //     {
  //       path: '/system',
  //       redirect: '/system/user',
  //     },
  //     {
  //       name: '用户管理',
  //       path: '/system/user',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '角色管理',
  //       path: '/system/role',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '菜单管理',
  //       path: '/system/menu',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '部门管理',
  //       path: '/system/department',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '岗位管理',
  //       path: '/system/post',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '字典管理',
  //       path: '/system/dictionary',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '参数设置',
  //       path: '/system/config',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '通知公告',
  //       path: '/system/notice',
  //       component: placeholderPage,
  //     },
  //   ],
  // },
  // {
  //   name: '权限管理',
  //   path: '/permission',
  //   routes: [
  //     {
  //       path: '/permission',
  //       redirect: '/permission/account',
  //     },
  //     {
  //       name: '账号权限',
  //       path: '/permission/account',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '角色授权',
  //       path: '/permission/role-auth',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '接口权限',
  //       path: '/permission/api',
  //       component: placeholderPage,
  //     },
  //   ],
  // },
  // {
  //   name: '系统监控',
  //   path: '/monitor',
  //   routes: [
  //     {
  //       path: '/monitor',
  //       redirect: '/monitor/online-user',
  //     },
  //     {
  //       name: '在线用户',
  //       path: '/monitor/online-user',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '服务监控',
  //       path: '/monitor/server',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '缓存监控',
  //       path: '/monitor/cache',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '定时任务',
  //       path: '/monitor/job',
  //       component: placeholderPage,
  //     },
  //   ],
  // },
  // {
  //   name: '日志管理',
  //   path: '/log',
  //   routes: [
  //     {
  //       path: '/log',
  //       redirect: '/log/operation',
  //     },
  //     {
  //       name: '操作日志',
  //       path: '/log/operation',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '登录日志',
  //       path: '/log/login',
  //       component: placeholderPage,
  //     },
  //     {
  //       name: '异常日志',
  //       path: '/log/error',
  //       component: placeholderPage,
  //     },
  //   ],
  // },
];

export default routes;
