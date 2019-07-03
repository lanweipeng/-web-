<template lang="html">
    <div>
        <input type="button" value="+5" @click="add()"/>
    </div>
</template>

<script>
export default {
    name:'son',
    methods:{
        add(){
            this.$store.dispatch('add',5)
        }
    }
}
</script>
<style lang="less" scoped>
    
</style>
