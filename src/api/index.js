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
    return request.get('order/find-order/reservation/'+data.page+'?mid='+data.mid)
}
export function preSubmit(data) {
    return request.post('order/submit-order',data)
}
export function setEmp(data) {
    return request.post('order/set-emp',data)
}
export function getServicesTypes(data) {
    return request.get('service-type',data)
}
export function addNotice(data) {
    return request.post('notice/save',data)
}
export function updateNotice(data) {
    return request.post('notice/update',data)
}
export function getNotice(data) {
    return request.get('notice/list/'+data)
}
export function delNotice(data) {
    return request.get('notice/delete?id='+data.id)
}
export function delShoppingCar(data) {
    return request.get('shopping-car/delete?id='+data.id)
}
export function getShoppingCar(data) {
    return request.get('shopping-car/'+data.page+'?mid='+data.mid)
}
export function addShoppingCar(data) {
    return request.post('shopping-car/save',data)
}
