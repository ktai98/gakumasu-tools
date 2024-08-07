import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Left3WeeksCalculator from '../views/Left3WeeksCalculator.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/left-3-weeks-calculator',
    name: 'Left3WeeksCalculator',
    component: Left3WeeksCalculator,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
