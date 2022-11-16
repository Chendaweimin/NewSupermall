import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import BScroll from 'better-scroll';
Vue.prototype.$BScroll = BScroll;
 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')