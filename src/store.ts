import Vue from 'vue';
import Vuex from 'vuex';
import { User } from './models/User';

Vue.use(Vuex);

export interface AppState {
  token: string | null;
  user: User | null;
}

export default new Vuex.Store<AppState>({
  state: {
    token: null,
    user: null,
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
  },
  actions: {

  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
});
