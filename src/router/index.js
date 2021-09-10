import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'
Vue.use(VueRouter)
  const originPush=VueRouter.prototype.push
  VueRouter.prototype.push=function(location,onResolved,onRejected){
          //location就是调用push传递过来的对象
      if(onResolved===undefined &&onRejected===undefined){
          return originPush.call(this,location).catch(()=>{})
      }else{
          return originPush.call(this,location,onResolved,onRejected)
      }
  }

  const originReplace=VueRouter.prototype.replace
  VueRouter.prototype.replace=function(location,onResolved,onRejected){
      if(onResolved===undefined &&onRejected===undefined){
          return originReplace.call(this,location).catch(()=>{})
      }else{
          return originReplace.call(this,location,onResolved,onRejected)
      }
}
const routes = [
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/',
      redirect:'/home'
    }
]

const router = new VueRouter({
  routes
})

export default router
