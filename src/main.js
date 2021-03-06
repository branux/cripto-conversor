import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

axios.defaults.baseURL = process.env.VUE_APP_API

new Vue({
  render: h => h(App)
}).$mount('#app')
