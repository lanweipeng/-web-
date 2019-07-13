// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/index'
import 'babel-polyfill'
import promise from 'es6-promise'
import './assets/css/core.css'
import './assets/css/icon.css'
import './assets/css/index.css'
Vue.config.productionTip = false
promise.polyfill()
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})