import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/main.min.css'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
