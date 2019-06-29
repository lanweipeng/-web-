import Vue from 'vue/dist/vue.esm'
let vue = new Vue({
    el: '#div1',
    data: {},
    template: '<div><cmp1/></div>',
    components: {
        cmp1: {
            data() {
                return { a: 12 }
            },
            template: '<div>{{a}}</div>'
        }

    }
})