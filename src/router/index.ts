import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Colors, paths, TrafficLightParams } from '@/utils/constants';
import Main from '../views/Main.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: paths[Colors.Red],
    name: 'RedColor',
    props: TrafficLightParams[Colors.Red],
    component: Main,
    sensitive: false,
  },
  {
    path: paths[Colors.Yellow],
    name: 'YellowColor',
    props: TrafficLightParams[Colors.Yellow],
    component: Main,
    sensitive: false,
  },
  {
    path: paths[Colors.Green],
    name: 'GreenColor',
    props: TrafficLightParams[Colors.Green],
    component: Main,
    sensitive: false,
  },
  {
    path: '/:catchAll(.*)',
    redirect: paths[Colors.Red],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
