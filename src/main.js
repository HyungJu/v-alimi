import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/custom.scss'
import VueTailwind from 'vue-tailwind'
import settings from '@/assets/theme.js'

Vue.config.productionTip = false
Vue.use(VueTailwind, settings)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
