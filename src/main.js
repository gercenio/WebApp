// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import auth from './auth/auth'

Vue.use(BootstrapVue)
Vue.use(router)
Vue.config.productionTip = false
auth.checkAuth()

new Vue({
  el:'#app',
  router,
  render: h => h(App)
});

/* eslint-disable no-new 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})*/