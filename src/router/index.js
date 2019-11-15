import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Add from '@/page/add/add'
import Pragh from '@/page/pragh/pragh'
import AccountDetails from '@/page/accountDetails/accountDetails'
import Community from '@/page/community/community'
import Mine from '@/page/mine/mine'
import Login from '@/page/login/login'

Vue.use(Router)

export default new Router({
  // 顶层路由，对应index.html
  path: '/',
  component: App,
  routes: [
    // 地址为空时跳转login页面
    { path: '', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    // { path: '/', name: 'home', component: Home },
    { path: '/add', name: 'add', component: Add },
    // { path: '/pragh', name: 'pragh', component: Pragh },
    // { path: '/details', name: 'details', component: Details },
    // { path: '/community', name: 'community', component: Community },
    // { path: '/mine', name: 'mine', component: Mine },
    // app内页
    {
      path: '/add',
      name: 'home',
      component: Home,
      children: [
        // { path: '', redirect: '/exam' },
        // { path: '/add', name: 'add', component: Add, meta: { keepAlive: true } },
        { path: '/pragh', name: 'pragh', component: Pragh, meta: { keepAlive: true } },
        { path: '/accountDetails', name: 'accountDetails', component: AccountDetails, meta: { keepAlive: true } },
        { path: '/community', name: 'community', component: Community, meta: { keepAlive: true } },
        { path: '/mine', name: 'mine', component: Mine, meta: { keepAlive: true } }
      ]
    }
  ]
})
