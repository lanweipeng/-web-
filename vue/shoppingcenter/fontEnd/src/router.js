import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Member from './components/member.vue'
import Cart from './components/Cart.vue'
import Setting from './components/Setting.vue'
// 3. 创建路由对象
var router = new VueRouter({
    routes: [
      {path:'/',redirect:'/home'},
      {path:'/index',redirect:'/home'},
      {path:'/home',component:Home},
      {path:'/member',component:Member},
      {path:'/cart',component:Cart},
      {path:'/setting',component:Setting},
    ],
    linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router