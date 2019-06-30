import Vue from 'vue/dist/vue.esm'
import './cmp1'
let vue = new Vue({
    el: '#div1',
    data: {
        type: ''
    },
    template: `
    <div>
    <input v-model="type" type="text" />
    <component :is="type" name="lwp" :age="24"/>
    </div>
`,

})