import Vue from 'vue/dist/vue.esm'
import MyDialog from './my-dialog'
let vm = new Vue({
    el: '#div1',
    data: {
        type: ''
    },
    template: `
    <div>
        <my-dialog>
        <template slot="title">g</template>
        h
        </my-dialog>
    </div>
    `
})