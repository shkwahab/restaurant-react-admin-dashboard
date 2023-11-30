import React, { useState } from 'react'
import state from '../../../proxyState/store'
import { useSnapshot } from 'valtio'
import { FaChevronDown } from "react-icons/fa";
const CustomerMapFilter = () => {
    const snap = useSnapshot(state)
    const list = ["today", "weekly", "monthly"]
    return (
        <div className='flex justify-between'>
            <div>
                <h2 className=' font-primary sm:text-xl text-lg lg:text-2xl font-bold'>
                    Customer Map
                </h2>
                <p className='text-gray-500 text-sm sm:text-base'>
                    Lorem ipsum dolor sit amet, consectetur
                </p>
            </div>
            <div className='flex capitalize '>
                {list.map((item) => {
                    return <div key={item} className={`${snap.customerFilterCriteria===item?" text-buttonPrimary sm:text-base text-sm underline underline-offset-[8px] font-bold ":" text-secondary"} cursor-pointer font-primary mx-2  decoration-[2px] `} onClick={() => {
                        state.customerFilterCriteria = item
                    }} >
                        {item}
                    </div>
                })}
            </div>
        </div>
    )
}

export default CustomerMapFilter
