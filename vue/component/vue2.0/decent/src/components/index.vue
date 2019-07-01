<template lang="html">
    <div >首页</div>
</template>
<script>
import { constants } from 'crypto';
export default {
    name:'index',
    async created(){
        // let {data} = await this.axios.get('http://localhost:8080/data/1.json');
        // let {data} = await this.$http.get('http://localhost:8080/data/1.json')
        
        let res=await fetch('http://localhost:8080/data/1.json')
        let data=await res.json();
        console.log(data)
    }
}
</script>
