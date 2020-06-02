import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children:[
      {
        path: '',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'catalog',
        component: () => import('@/views/Catalog.vue'),
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
