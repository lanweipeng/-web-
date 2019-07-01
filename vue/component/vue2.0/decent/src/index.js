import Vue from 'vue'
import App from './app.vue'
import router from './routers'
// import Axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, Axios);

// import VueResource from 'vue-resource'
// Vue.use(VueResource)
let vue = new Vue({
    el: '#div1',
    data: {},
    components: {
        App
    },
    router,
    template: `
    <App/>
    `
})