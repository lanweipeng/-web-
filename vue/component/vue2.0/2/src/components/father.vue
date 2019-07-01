
<template lang="html">
    <div>
        <div id="box">gg<p>pp</p></div>
        <son/>
    </div>
</template>

<script>
import Son from './son.vue'
export default {
    name:'father',
    data(){
        return{a:12}
    },
    methods:{},
    components:{
        Son
    }
};
</script>
<style scoped lang="less">
@main-color:red;
#box {
    width: 200px;
    height: 200px;
    background-color: #ccc;
    p{
        color:@main-color
    }
}
</style>