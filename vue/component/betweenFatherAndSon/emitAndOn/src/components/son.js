import Vue from 'vue'
export default Vue.component('son', {
    data() {
        return {
            num: 0
        }
    },
    template: `
    <div>子级:{{num}}</div>
    `,
    created() {
        this.$on('add_num', function(n) {
            this.num += n;
        })
    }
})