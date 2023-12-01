import React from 'react'
import OrderPageFilter from './OrderPageFilter'
import OrderTable from './OrderTable'
import OrderPagination from './OrderPagination'

const OrderPage = () => {
    return (
        <div className='mx-4'>
            <h2 className='font-primary text-2xl font-bold'>
                Orders
            </h2>
            <OrderPageFilter />
            <OrderTable />
            <OrderPagination />
        </div>
    )
}

export default OrderPage
