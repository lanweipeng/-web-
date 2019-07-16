import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { Header, Tabbar, TabItem,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header, Tabbar.name, Tabbar, TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import router from './router.js'
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
})