import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'
import { store } from './store/index'
import { router } from './router'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueAxios, axios)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
