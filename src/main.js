import Vue from 'vue'
import App from './App.vue'
import ZHTW from './locale/zh-TW'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import './registerServiceWorker'
Vue.use(VueI18n)
Vue.config.productionTip = false

const messages = {
  'zh-TW': ZHTW
}
const i18n = new VueI18n({
  locale: 'zh-TW', // set locale
  messages // set locale messages
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
