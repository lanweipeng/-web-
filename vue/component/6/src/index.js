import Vue from 'vue'
let vue = new Vue({
    el: '#div1',
    mounted() {
        alert('mounted')
    },
    created() {
        alert('created')
    },
    template: `
    <div>1</div>
    `
})