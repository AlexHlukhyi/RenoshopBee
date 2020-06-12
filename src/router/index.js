import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'categories/:id/products',
        component: () => import('@/views/Catalog.vue'),
        props: true
      },
      {
        path: 'search',
        component: () => import('@/views/Search.vue'),
        props: (route) => ({ query: route.query.q })
      },
      {
        path: 'product/:id',
        component: () => import('@/views/Product.vue'),
      },
      {
        path: 'cart',
        component: () => import('@/views/Cart.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'checkout',
        component: () => import('@/views/Checkout.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/views/Register.vue'),
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.token) {
      next();
      return
    }
    next('/login')
  } else {
    next();
  }
});

export default router
