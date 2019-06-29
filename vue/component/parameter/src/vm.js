import Vue from 'vue/dist/vue.esm'
import './cmp1'
let vue = new Vue({
    el: '#div1',
    data: {},
    template: '<div><cmp1 name="lwp" :age="12"/></div>',

})