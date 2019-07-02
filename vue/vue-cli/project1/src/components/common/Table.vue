<template lang="html">
<div>
  <table class="table">
    <thead>
  <tr>
    <th v-for="field in fields">{{field.text}}</th>
    <th>操作</th>
  </tr>
</thead>
<tbody>
  <tr v-for="data in datas">
    <td v-for="field in fields">{{data[field.name]}}</td>
    <td><div class="btn btn-danger" @click="fn_del(data.ID)">删除</div></td>
  </tr>
</tbody>
  </table>
  </div>
</template>
<script>
export default {
  name: "Table",
  props: ["fields", "datas","father"],
  methods: {
    fn_del(id) {
      this.father.del(id)
    }
  },
};
</script>
<style lang="less" scoped>
</style>