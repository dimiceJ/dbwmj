import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import vueResource from 'vue-resource'
import App from './App.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Loading from './components/loading/loading.vue'
import store from './components/store/index.js'
import filters from './components/filters/index.js'

import routes from './components/routeConfig.js'

console.log(filters);
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(vueResource)

const router = new VueRouter({
    scrollBehavior: () => ({ y:0 }),
    routes
})


// Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  store,
  components:{Loading},
  render: h => h(App)
})
