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
      import(/* webpackChunkName: "platform" */ '@/views/PlatformView.vue'),
  },
  {
    path: '/categories/:ct',
    name: 'categories',
    component: () =>
      import(/* webpackChunkName: "categories" */ '@/views/CategoriesView.vue'),
  },
  {
    path: '/details/:id/:name',
    name: 'details',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/GameDetailsView.vue'),
  },
  {
    path: '/games',
    name: 'games',
    component: () =>
      import(/* webpackChunkName: "games" */ '@/views/GamesView.vue'),
  },
  {
    path: '/our-world/',
    name: 'ourworld',
    component: () =>
      import(/* webpackChunkName: "ourworld" */ '@/views/OurWorldView.vue'),
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
