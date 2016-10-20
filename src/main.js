import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Gob from './components/Gob'
import Ken from './components/Ken'
Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  routes: [
    { path: '/gob', component: Gob },
    { path: '/ken', component: Ken }
  ]
})
new Vue({
  router,
  render: h => h(App) // Start component App.vue
}).$mount('#app')