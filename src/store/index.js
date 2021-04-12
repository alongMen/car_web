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
                name:'pre',
                size: 18, // icon大小
                type: 'md-arrow-forward', // icon类型
                text: '美护预约',
            },
            {
                name:'notice',
                size: 18, // icon大小
                type: 'ios-paper', // icon类型
                text: '通知公告',
            }
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },
    },
})

export default store