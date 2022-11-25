import api from "./api.js";
export function getConfirmBills() {
    return api.get('admin/noBills',{})
}
export function confirmBills(bids) {
    return api.put('admin/confirm',bids)
}
export function delBills(bids) {
    return api.delete('admin/cancel',bids)
}
export function createUser(user) {
    return api.post('admin/create/user',user)
}