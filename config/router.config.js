const routes = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/users'
      },
      {
        path: '/products',
        component: './products/index',
      },
      {
        path: '/users',
        component: './users/index',
      },
      {
        path: '/exception/403',
        component: './exception/403',
      },
      {
        path: '/exception/404',
        component: './exception/404',
      },
      {
        path: '/exception/500',
        component: './exception/500',
      },
    ],
  },
]

export default routes