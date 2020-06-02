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
      },
      {
        path: 'search',
        component: () => import('@/views/Search.vue'),
      },
      {
        path: 'product',
        component: () => import('@/views/Product.vue'),
      },
      {
        path: 'cart',
        component: () => import('@/views/Cart.vue'),
      },
      {
        path: 'checkout',
        component: () => import('@/views/Checkout.vue'),
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
