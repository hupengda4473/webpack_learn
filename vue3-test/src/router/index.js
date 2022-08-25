import { createRouter, createWebHashHistory } from 'vue-router'
const home = () => import(/* webpackChunkName: "about" */ '../components/home');
const news = () => import(/* webpackChunkName: "about" */ '../components/news');
const massage = () => import(/* webpackChunkName: "about" */ '../components/massage');
const about = () => import(/* webpackChunkName: "about" */ '../components/about');
const mine = () => import(/* webpackChunkName: "about" */ '../components/mine');
const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
      {
        path: 'news',
        name: 'news',
        component: news
      },
      {
        path: 'massage',
        name: 'massage',
        component: massage
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
