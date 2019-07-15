import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { Header, Tabbar, TabItem } from 'mint-ui';
Vue.component(Header.name, Header, Tabbar.name, Tabbar, TabItem.name, TabItem)

import router from './router.js'
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
})