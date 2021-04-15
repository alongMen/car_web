import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var menu = []
const userName=JSON.parse(localStorage.getItem('userinfo')).nickName
if(userName=='abc'){
    menu = [
        {
            name: 'memberList',
            size: 18,
            type: 'ios-ribbon',
            text: '会员列表',
        },
        {
            name: 'clerkList',
            size: 18,
            type: 'md-contacts',
            text: '店员管理',
        },
        {
            name:'shoping',
            size: 18, // icon大小
            type: 'ios-basket', // icon类型
            text: '商品管理',
        },
        {
            name:'ordermanger',
            size: 18, // icon大小
            type: 'md-basket', // icon类型
            text: '商品订单管理',
        },
    ]
}else{
    menu=[
        {
            name:'shoppingCar',
            size: 18, // icon大小
            type: 'ios-cart', // icon类型
            text: '我的购物车',
        },
        
        {
            name:'order',
            size: 18, // icon大小
            type: 'md-reorder', // icon类型
            text: '订单查看',
        },
    ]
}



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
                type: 'md-contact', // icon类型
                text: '个人信息', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
            },
            {
                name:'pre',
                size: 18, // icon大小
                type: 'ios-create', // icon类型
                text: '美护预约订单',
            },
            {
                name:'shop',
                size: 18, // icon大小
                type: 'md-appstore', // icon类型
                text: '汽车饰品商店',
            },
            {
                name:'notice',
                size: 18, // icon大小
                type: 'ios-notifications', // icon类型
                text: '通知公告',
            },
            ...menu

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