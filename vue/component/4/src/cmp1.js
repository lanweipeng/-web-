import Vue from 'vue/dist/vue.esm'
Vue.component('cmp1', {
    props: ['name', 'age'],
    data() {
        return { a: 22 }
    },
    template: '<div>{{name}}{{age+1}}</div>'
})