import { proxy } from 'valtio'
const state = proxy({
    orderFilterCriteria: "monthly",
    revenueFilterCriteria: "monthly",
    customerFilterCriteria: "monthly",
    mobileSidebar: false,
    orderStatusFilterCriteria: "All Status",
    defaultOrderFilterData: "today",
    filterOrderLength: 0,
    filterOrderStatusLength: 0,
})

export default state