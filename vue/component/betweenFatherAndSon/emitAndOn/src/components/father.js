import Vue from 'vue'
import Son from './son'
export default Vue.component('father', {
    methods: {
        fn() {
            this.$refs.c1.$emit('add_num', 7);
        }
    },
    template: `
    <div>
        <div>
            父级
            <input type="button" value="+7" @click="fn()"/>
        </div>
        <son ref="c1"/>
    </div>
    `
})