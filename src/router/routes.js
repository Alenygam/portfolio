const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about_me',
    name: 'About Me',
    component: () => import('../views/About.vue')
  }
]

export default routes;