import React from 'react'
import { useSnapshot } from 'valtio'
import state from "../../../proxyState/store"

const OrderStatus = () => {
    const snap = useSnapshot(state)
    const filterCtiteria = snap.orderFilterCriteria
    const successOrdersCriteria = [{
        id: 1,
        name: "today",
        deliveryed: 85,
        cancelled: 10,
        onDelivery: 5
    }, {
        id: 2,
        name: "weekly",
        deliveryed: 223,
        cancelled: 30,
        onDelivery: 215
    }, {
        id: 3,
        name: "monthly",
        deliveryed: 845,
        cancelled: 120,
        onDelivery: 255
    }]
    return (
        <div>
            <div >
                {successOrdersCriteria.filter(criteria => criteria.name === filterCtiteria).map((order) => {
                    return <div key={order.id} className="flex justify-between font-primary items-center">
                        <div className='mx-4'>
                            <h3 className='text-gray-700 font-semibold text-xl sm:text-2xl lg:text-3xl my-2'>
                                {order.onDelivery}
                            </h3>
                            <p className='text-secondary sm:text-base text-sm'>
                                On Delivery
                            </p>
                        </div>
                        <div className='mx-4'>
                            <h3 className='text-gray-700 font-semibold text-xl sm:text-2xl lg:text-3xl my-2'>
                                {order.deliveryed}
                            </h3>
                            <p className='text-secondary sm:text-base text-sm'>
                                Delivered
                            </p>
                        </div>
                        <div className='mx-4'>
                            <h3 className='text-gray-700 font-semibold text-xl sm:text-2xl lg:text-3xl my-2'>
                                {order.cancelled}
                            </h3>
                            <p className='text-secondary sm:text-base text-sm'>
                                Cancelled
                            </p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default OrderStatus
