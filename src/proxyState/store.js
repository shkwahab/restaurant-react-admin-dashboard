import { proxy } from 'valtio'
const state= proxy({
    orderFilterCriteria:"monthly",
    revenueFilterCriteria:"monthly",
    customerFilterCriteria:"monthly",
    mobileSidebar:false
})

export default state