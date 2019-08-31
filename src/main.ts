import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueTypedi from 'vue-typedi';

Vue.config.productionTip = false;
Vue.use(VueTypedi);

new Vue({
  router,
  store,
  vuetify,
  render: (h: any) => h(App),
}).$mount('#app');
