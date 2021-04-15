import { resetRouter } from '@/router'
import store from '../store'

export function resetTokenAndClearUser() {
    // 退出登陆 清除用户资料
    localStorage.clear()
    store.state.menuItems=[]
    // 重设路由
    resetRouter()
}

export const defaultDocumentTitle = '汽车美护系统'
export function getDocumentTitle(pageTitle) {
    if (pageTitle) return `${defaultDocumentTitle} - ${pageTitle}`
    return `${defaultDocumentTitle}`
}