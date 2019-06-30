import Vue from 'vue/dist/vue.esm'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import './css/my-dialog.css'
export default Vue.component('my-dialog', {
    template: `
<div class="pabel panel-default my-dialog">
    <div class="panel-heading">
        <slot name="title"/>
    </div>
    <div class="panel-body">
        <slot/>
    </div>
</div>
`
})