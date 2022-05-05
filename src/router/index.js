import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/platform/:pt',
    name: 'platform',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/PlatformView.vue'),
  },
  {
    path:'/games',
    name: 'games',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/GamesView.vue'),
  },
  {
    path: '/categories/:id',
    name: 'categories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/CategoriesView.vue'),
  },
  {
    path: '/details/:id',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/GameDetailsView.vue'),
  },
  {
    path: '/games',
    name: 'games',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/GamesView.vue'),
  },
  {
    path: '/our-world/',
    name: 'ourworld',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/OurWorldView.vue'),
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
