export default [
  {
    path: '/',
    name: 'session-list',
    component: () => import('@@/SessionList/index.vue'),
  },
  {
    path: '/record',
    name: 'session-record',
    component: () => import('@@/SessionRecord/index.vue'),
  }
]