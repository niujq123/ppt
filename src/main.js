import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/swiper.js'
import * as filters from './filters/index'
import https from './api/http.js'
import './icons/index.js'
import { viewImage } from './directive/index'
viewImage(Vue)
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Vue.use(https)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
