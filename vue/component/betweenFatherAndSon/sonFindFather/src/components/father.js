import Vue from 'vue'
import Son from './son'
export default Vue.component('father', {
    data() {
        return { num: 0 }
    },
    methods: {
        fn() {
            this.num++;
        }
    },
    template: `
    <div>
        <div>
            父级:{{num}}
            
        </div>
        <son :parent="this"/>
    </div>
    `
})