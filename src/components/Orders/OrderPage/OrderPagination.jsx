import React from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { orderList } from './OrderTable';
import state from '../../../proxyState/store';
import { useSnapshot } from 'valtio';
const OrderPagination = () => {
    const snap = useSnapshot(state)
    
    const total = orderList.length

    return (
        <div className='my-10'>
            <div className="flex font-primary justify-between items-center">
                <div>
                    <h3 className='font-semibold text-gray-700'>
                        Showing 1 to 3 of {total} entries
                    </h3>
                </div>
                <div className='flex space-x-5'>
                    <div>
                        <button className=" flex items-center bg-buttonPrimary text-lg p-2  rounded-full font-bold text-white">
                            <FaAngleDoubleLeft className='text-white  ' />
                            <span className='mx-4'>
                                Previous
                            </span>
                        </button>
                    </div>
                    <div>
                        <div className='flex space-x-5'>
                            <button className=" flex items-center  text-lg px-4 p-2 rounded-full font-bold text-buttonPrimary">
                                1
                            </button>
                            <button className=" flex items-center  text-lg px-4 p-2 rounded-full  text-buttonPrimary">
                                2
                            </button>
                            <button className=" flex items-center  rounded-full font-bold text-buttonPrimary">
                                ...
                            </button>
                            <button className=" flex items-center  text-lg px-4 p-2 rounded-full  text-buttonPrimary">
                                4
                            </button>
                        </div>
                    </div>
                    <div>
                        <button className="  flex items-center bg-buttonPrimary text-lg p-2 rounded-full font-bold text-white">
                            <span className='ml-4'>
                                Next
                            </span>
                            <FaAngleDoubleRight className='text-white  mx-2' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPagination
