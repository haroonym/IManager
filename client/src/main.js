import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'

Vue.config.productionTip = false;

export const networkAddress = 'http://127.0.0.1:3000';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
