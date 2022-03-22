import Vue from 'vue' //注入依赖
import Router from 'vue-router' //vue-router插件导入
 
//import Home from '../components/Home.vue' //导入路由组件

//懒加载写法
//const Home= () => import('../components/Home.vue')

Vue.use(Router) //调用Vue.use方法

const router= new Router({ //创建路由实例
  routes: [
    //{
      //path: '/',
     // redirect: '/home' //默认的路由
    //},
    //{
      //path: '/home',
      //component: Home
    //},
  ],
  mode: 'history',  //histiry模式
  linkActiveClass: 'active' //类名改为 active
})

//重复点击路由会报错添加该代码
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export default router