import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'home',
    component: () => import('@/views/home/Home'),
  },
  {   
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Home'),
    meta: {
      title: '首页-陈小二',
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/category/Category'),
    meta: {
      title: '分类',
    }
  },
  {     
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart/Cart'),
    meta: {
      title: '购物车',
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/profile/Profile'),
    meta: {
      title: '个人',
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active',
})
// 前置钩子
router.beforeEach((to,from,next)=>{
  //从from跳转到to
  document.title = to.matched[0].meta.title
//    console.log(to);
//    console.log('++++');
  next()
})
export default router
