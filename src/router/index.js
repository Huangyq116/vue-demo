import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path:'/home',
    name:'home',
    redirect:'/index',
    meta: {title:"首页"},  //面包屑
    component:()=> import('../views/home/index.vue'),
    children:[
      {
        path: '/index', //首页
        name: 'index',
        meta: {title:"首页"},
        component: () => import('../views/home/index/index.vue')
      },
      {
        path: '/stats', //数据统计
        name: 'stats',
        meta: {title:"数据统计"},
        component: () => import('../views/home/stats/index.vue')
      },
      {
        path: '/wms', //信息管理
        name: 'wms',
        meta: {title:"信息管理"},
        component: () => import('../views/home/wms/index.vue'),
        children:[
          {
            path: '/wms/list', //列表展示
            name: 'wmslist',
            meta: {title:"列表展示"},
            component: () => import('../views/home/wms/list.vue')
          }
        ]
      },
      {
        path: '/user', //用户管理
        name: 'user',
        meta: {title:"用户管理"},
        component: () => import('../views/home/user/index.vue'),
        children:[
          {
            path: '/user/stats', //用户统计
            name: 'userstats',
            meta: {title:"用户统计"},
            component: () => import('../views/home/user/stats.vue')
          },
          {
            path: '/user/role', //角色统计
            name: 'userrole',
            meta: {title:"角色统计"},
            component: () => import('../views/home/user/role.vue')
          }
        ]
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach(function(to,from,next){
//   if(!sessionStorage.getItem("username")){
//     if(to.path !== '/login'){
//       next('/login')
//     }
//   };
//   next();
//   })
  
export default router
