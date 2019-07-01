import Vue from 'vue'
import Cmp1 from './components/cmp1.vue'
let vue = new Vue({
    el: '#div1',
    data: {},
    components: {
        Cmp1
    },
    template: `
    <div><cmp1/></div>
    `
})