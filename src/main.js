import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';


// VueRouter est un pluggin de Vue. On doit donc spécifier d'utiliser VueRouter dans Vue :
Vue.use(VueRouter)


// Création des routes :
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})



Vue.config.productionTip = false;

// Création de la vue
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')






