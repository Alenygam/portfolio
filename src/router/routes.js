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
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/projects/spaggiu',
    name: 'Spaggiu',
    component: () => import('../views/Projects/Spaggiu.vue')
  },
  {
    path: '/projects/simpleweather',
    name: 'Simple Weather',
    component: () => import('../views/Projects/SimpleWeather.vue')
  }
]

export default routes;