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
export function getMemberList(data) {
    return request.get('member/find-members/'+data)
}
export function getclerkList(data) {
    return request.get('employee/emp-info/'+data)
}
export function getPreList(data) {
    return request.get('order/find-order/reservation/'+data)
}
export function preSubmit(data) {
    return request.post('order/submit-order',data)
}
export function setEmp(data) {
    return request.post('order/set-emp',data)
}