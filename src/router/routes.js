const routes = [
  {
    path: '/',
    component: () => import('src/view/index/index.vue'),
  },
  {
    path: '/count',
    component: () => import('src/view/count/count.vue'),
  },
  {
    path: '/upload',
    component: () => import('src/view/upload/index.vue'),
  },
]

export default routes
