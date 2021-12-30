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
  },
  {
    path: '/projects/spaggiu',
    name: 'About Me',
    component: () => import('../views/Projects/Spaggiu.vue')
  }
]

export default routes;