<template>
  <div>
    <!-- {{$store.state}} -->
    {{a}}
    {{b}}
    {{count}}
    <!-- {{onlineUsers}} -->
    <!-- <input type="button" value="平分" @click="count+=0" /> -->
    <input type="button" value="a+5" @click="addA(5)">
    <input type="button" value="b+3" @click="addB(3)">
    <input type="button" value="张三出现" @click="setOnline('ddfsfo')">
    <ul>
      <li v-for="user in onlineUsers">
        名字：{{user.name}}
        名字：{{user.age}}
      </li>
    </ul>
    <Son />
  </div>
</template>

<script>
import Son from "@/components/son";
import {mapState,mapActions,mapGetters} from "vuex";
import { constants } from 'fs';
export default {
  name: "Index",
  data() {
    return {};
  },
  methods:{
    ...mapActions(['addA','addB','setOnline','readUsers'])
  },
  created() {
    this.readUsers();
  },
  components: {
    Son
  },
  computed: {
    // ...mapGetters('count','onlineUsers'),
    ...mapState(['a','b']),
    ...mapGetters(['count','onlineUsers']),
    // count: {
    //   get() {
    //     return this.$store.getters.count;
    //   },
    //   set(value) {
    //     this.$store.dispatch("set_a", value / 2);
    //     this.$store.dispatch("set_b", value / 2);
    //   }
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
