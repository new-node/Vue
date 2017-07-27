// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Validator from 'vue-validator'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import AMap from 'vue-amap'
import {Picker} from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VueResource)
Vue.use(Validator)
Vue.use(ElementUI)
Vue.use(AMap)
Vue.component(Picker.name, Picker)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
