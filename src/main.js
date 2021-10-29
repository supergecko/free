import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui' // 引入 element-ui 组件库
import 'element-ui/lib/theme-chalk/index.css' // 引入 element-ui 组件库样式

import '@/style/index.less' // 全局样式

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
