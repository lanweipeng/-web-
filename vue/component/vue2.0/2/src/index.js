import Vue from 'vue'
import Father from './components/father.vue'
let vue = new Vue({
    el: '#div1',
    data: {},
    components: {
        Father
    },
    template: `
    <div><father/></div>
    `
})