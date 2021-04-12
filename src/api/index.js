import request from '@/utils/request'


export function registerMember(data) {
    return request.post('member/save',data)
}
export function login(data) {
    return request.post('member/login-access',data)
}
export function changePwd(data) {
    return request.post('member/update-pass',data)
}
export function changeUserinfo(data) {
    return request.post('member/update-info',data)
}