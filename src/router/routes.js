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
    path: '/input',
    component: () => import('src/view/input/index.vue'),
  },
]

export default routes
