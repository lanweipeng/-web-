import Vue from 'vue'
import Son from './son'
export default Vue.component('father', {
    methods: {
        fn() {
            this.$refs.c1.num++;
        }
    },
    template: `
    <div>
        <div>
            父级
            <input type="button" value="+1" @click="fn()"/>
        </div>
        <son ref="c1"/>
    </div>
    `
})