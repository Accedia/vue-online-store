import Vue from 'vue';
import Router, { NavigationGuard } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Product from '@/views/Product.vue';
import Cart from '@/views/Cart.vue';
import Search from '@/views/Search.vue';
import store from '@/store';

Vue.use(Router);

const authGuard: NavigationGuard<Vue> = (to, fom, next) => {
  if (!store.getters.isLoggedIn) {
    next('/login');
  } else {
    next();
  }
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: authGuard,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product,
      beforeEnter: authGuard,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      beforeEnter: authGuard,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      beforeEnter: authGuard,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
