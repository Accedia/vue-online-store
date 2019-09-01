import Vue from 'vue';
import Vuex from 'vuex';
import { User } from './models/User';
import { Product } from './models/Product';

Vue.use(Vuex);

export interface CartItem {
  count: number;
  item: Product;
}

export interface AppState {
  token: string | null;
  user: User | null;
  cart: CartItem[];
}

export default new Vuex.Store<AppState>({
  state: {
    token: null,
    user: null,
    cart: [],
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
    clearToken(state) {
      state.token = null;
    },
    clearUser(state) {
      state.user = null;
    },
    addToCart(state, item: Product) {
      const existingProductIndex = state.cart.findIndex((i: CartItem) =>
        i.item.id === item.id);

      if (existingProductIndex >= 0) {
        state.cart[existingProductIndex].count++;
      } else {
        state.cart.push({ count: 1, item });
      }
    },
    removeFromCart(state, item: Product) {
      const index = state.cart.findIndex((i: CartItem) =>
        i.item.id === item.id);
      state.cart.splice(index, 1);
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
    userImage(state) {
      return state.user != null ? state.user!.picture.medium : '';
    },
    cartSize(state) {
      return state.cart.length;
    },
  },
});
