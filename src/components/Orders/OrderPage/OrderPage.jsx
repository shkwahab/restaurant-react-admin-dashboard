import React from 'react'
import OrderPageFilter from './OrderPageFilter'
import OrderTable from './OrderTable'

const OrderPage = () => {
    return (
        <div className='mx-4'>
            <h2 className='font-primary text-2xl font-bold'>
                Orders
            </h2>
            <OrderPageFilter />
            <OrderTable />
            
        </div>
    )
}

export default OrderPage
