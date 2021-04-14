import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isShowLoading: false, // 全局 loading
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '主页', // 文本内容
            },
            {
                name: 'userInfo', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'ios-egg-outline', // icon类型
                text: '个人信息', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
            },
            {
                name: 'memberList',
                size: 18,
                type: 'ios-egg-outline',
                text: '会员列表',
            },
            {
                name: 'clerkList',
                size: 18,
                type: 'ios-egg-outline',
                text: '店员管理',
            },
            {
                name:'pre',
                size: 18, // icon大小
                type: 'md-arrow-forward', // icon类型
                text: '美护预约',
            },
            {
                name:'shop',
                size: 18, // icon大小
                type: 'md-arrow-forward', // icon类型
                text: '汽车饰品商店',
            },
            {
                name:'shoping',
                size: 18, // icon大小
                type: 'md-arrow-forward', // icon类型
                text: '商品管理',
            },
            {
                name:'shoppingCar',
                size: 18, // icon大小
                type: 'md-arrow-forward', // icon类型
                text: '我的购物车',
            },
            {
                name:'ordermanger',
                size: 18, // icon大小
                type: 'md-arrow-forward', // icon类型
                text: '订单管理',
            },
            {
                name:'order',
                size: 18, // icon大小
                type: 'md-arrow-forward', // icon类型
                text: '订单查看',
            },
            {
                name:'notice',
                size: 18, // icon大小
                type: 'ios-paper', // icon类型
                text: '通知公告',
            }
        ],
        nickName:''
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },
        setNickName(state) {
            const name=JSON.parse(localStorage.getItem('userinfo')).nickName
            state.nickName = name
        }
    },
})

export default store