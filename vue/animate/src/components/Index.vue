<template lang="html">
<div>
  <transition-group name="fadeUp" tag="ul">  
    <li v-for="item,index in arr" :key="item">
      {{item}}
    <a href="#" @click="del(index)">delete</a>
  </li>
</transition-group>

    
</div>

</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      b: true,
      arr: [1, 5, 55, 6, 25, 2, 8, 75, 86, 95]
    };
  },
  methods: {
    del(index) {
      this.arr.splice(index, 1);
    }
  }
};
</script>
<style lang="css" scoped>
ul li {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  animation-duration: 1s;
  margin: 10px;
}
</style>