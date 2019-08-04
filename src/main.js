import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import '@/style/index.less'
// ww
// ww
import router from '@/router'

// ww
import axios from 'axios'
Vue.prototype.$http = axios

// 控制台提醒信息，开发者环境来提示
Vue.config.productionTip = false
// main.js 的职责
// 职责：导入项目需要以来的资源
// 2.职责：创建一个跟实例
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
