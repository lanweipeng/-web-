import Vue from 'vue'
export default Vue.component('son', {
    props: ['parent'],
    methods: {
        fn() {
            this.parent.fn();
        }
    },
    template: `
    <div>子级
    <input type="button" value="+1" @click="fn()"/>
    </div>
    `
})