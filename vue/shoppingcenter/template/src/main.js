import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'
import router from './router'
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
})