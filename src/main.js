import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';

import VueRouter from 'vue-router';
import home from './views/home.vue';
import searchPage from './views/searchPage';

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes =[
    {path: '/', component: home},
    {path: '/search', component: searchPage},
]

const router = new VueRouter({mode: 'history',routes});

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
