<template>
  <div>
    <Table :fields="fields" :datas="datas" :father="this"/>
  </div>
</template>

<script>
import Table from "@/components/common/Table";
export default {
  name: "Index",
  data() {
    return {
      fields: [
        { name: "ID", text: "ID" },
        { name: "name", text: "名字" },
        { name: "age", text: "年龄" }
      ],
      datas: [
        { ID: 1, name: "lwp", age: 13 },
        { ID: 2, name: "wp", age: 13 },
      ]
    };
  },
  components: {
    Table
  },
  methods: {
    del(id) {
      this.datas=this.datas.filter(data=>data.ID!=id)
    }
  },
};
</script>

<style scope>
</style>
