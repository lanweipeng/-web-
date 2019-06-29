import Vue from 'vue/dist/vue.esm'
Vue.component('cmp1', {
    data() {
        return { a: 12 }
    },
    template: '<div>{{a}}</div>'
})