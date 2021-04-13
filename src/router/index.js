import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('@/components/Login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        meta: { title: '注册' },
        component: () => import('@/components/Register.vue'),
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('@/components/404.vue'),
    },
    { path: '/', redirect: '/home' },
]

// 本地所有的页面 需要配合后台返回的数据生成页面
export const asyncRoutes = {
    home: {
        path: 'home',
        name: 'home',
        meta: { title: '主页' },
        component: () => import('../views/Home.vue'),
    },
    userInfo:{
        path: '/userInfo', // 点击侧边栏跳到一个单独的路由页面，需要定义，层级和其他顶级路由一样
        name: 'userInfo',
        meta: { title: '会员信息' },
        component: () => import('@/views/UserInfo.vue'),
    },
    memberList:{
        path: '/memberList',
        name: 'memberList',
        meta: { title: '会员管理' },
        component: () => import('@/views/memberList.vue'),
    },clerkList:{
        path: '/clerkList',
        name: 'clerkList',
        meta: { title: '店员管理' },
        component: () => import('@/views/clerkList.vue'),
    },
    notice:{
        path: '/notice',
        name: 'notice',
        meta: { title: '通知公告' },
        component: () => import('@/views/Notice.vue'),
    },
    pre:{
        path: '/pre',
        name: 'pre',
        meta: { title: '美护预约' },
        component: () => import('@/views/pre.vue'),
    },
    shop:{
        path: '/shop',
        name: 'shop',
        meta: { title: '汽车饰品商店' },
        component: () => import('@/views/shop.vue'),
    },
}

const createRouter = () => new Router({
    routes: commonRoutes,
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router