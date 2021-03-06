// FICHIER QUI INSTANCIE L'APPLICATION

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

// Création et génère l'application dans #app
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

