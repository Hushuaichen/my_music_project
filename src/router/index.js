import Vue from 'vue'
import VueRouter from 'vue-router'
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
      component:()=>import('../views/Login')
    },
    {
      path:'/register',
      component:()=>import('../views/Register')
    },
    {
      path:'/home',
      component:()=>import('../views/Home'),
      children:[
        {
          path:'/main',
          component:()=>import('../views/Home/hot/main.vue')
        },
        {
          path:'/china',
          component:()=>import('../views/Home/hot/china.vue')
        },
        {
          path:'/minyao',
          component:()=>import('../views/Home/hot/minyao.vue')
        },
        {
          path:'/popular',
          component:()=>import('../views/Home/hot/popular.vue')
        },
        {
          path:'/yaogun',
          component:()=>import('../views/Home/hot/yaogun.vue')
        },
        {
          path:'/',
          redirect:'/main'
        }
      ]
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/findsong',
      component:()=>import('../views/FindSong')
    },
   {
      path:'/songdetail/:id/:name?',
      component:()=>import('../views/SongDetail')
    },
    {
      path:'/song/:id/:name/:url',
      component:()=>import('../views/Song'),
      name:'song'
    },
    {
      path:'/peoplesong/:id/:name',
      component:()=>import('../views/PeopleSong')
    },
    {
      path:'/daysong',
      component:()=>import('../views/daySong')
    },
    {
      path:'/songger',
      component:()=>import('../views/Songger')
    }
]
const router = new VueRouter({
  routes
})

export default router
