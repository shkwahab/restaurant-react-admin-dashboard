import React, { useState } from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import state from '../../../proxyState/store';
import { useSnapshot } from 'valtio';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const OrderPageFilter = () => {
    const snap = useSnapshot(state)
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }
    const date = new Date()
    const currentDay = date.getDate()
    const currentMonth = date.getMonth() + 1
    const currentYear = date.getFullYear()
    const today = `${currentMonth}/${currentDay}/${currentYear}-${currentMonth}/${currentDay}/${currentYear}`

    const dateFiter=snap.defaultOrderFilterData.split("-")
    const startDate=dateFiter[0]
    const endDate=dateFiter[1]
    if(startDate===endDate){
        state.defaultOrderFilterData=startDate
    }
    if (snap.defaultOrderFilterData === today) {
        state.defaultOrderFilterData = "Today"
    }



    const status = ["All Status", "On Delivery", "Delivered", "New Order", "Cancelled"]
    const setStatus = (status) => {
        state.orderStatusFilterCriteria = status
    }
    const [showDate, setShowDate] = useState(false)
    const [showStatus, setShowStatus] = useState(false)
    const showDateRange = () => {
        setShowDate(!showDate)
    }
    const handleSelect = (ranges) => {
        if (today === snap.defaultOrderFilterData) {
            state.defaultOrderFilterData = "Today"
        } 
        else {
            state.defaultOrderFilterData = `${ranges.selection.startDate.toLocaleDateString()}-${ranges.selection.endDate.toLocaleDateString()}`
        }
        setShowDate(false)
    }

    return (
        <div className='flex justify-between'>
            <div className='text-secondary mr-1 text-sm sm:text-base'>
                Here is your order list data
            </div>
            <div className='grid grid-cols-2  gap-x-4'>
                <div className='relative'>
                    <div onClick={() => {
                        setShowStatus(!showStatus)
                    }} className="flex cursor-default bg-gray-100 items-center font-semibold p-2 pr-4   sm:p-4 rounded-full text-buttonPrimary">
                        <AiOutlineThunderbolt className='mx-2 font-bold  sm:block hidden text-lg' />
                        <button className=" capitalize text-xs sm:text-base">
                            {snap.orderStatusFilterCriteria} 
                        </button>
                        <IoIosArrowDown className='mx-2 font-bold sm:block hidden ' />
                    </div>
                    <div className={`${showStatus ? 'block' : 'hidden'} p-2 right-0 top-16  sm:right-6 absolute z-10 bg-white  rounded-md shadow-2xl`}>
                        {status.map((item, index) => (
                            <div key={index} onClick={() => { setStatus(item); setShowStatus(false) }} className={` p-2 ${item != snap.orderStatusFilterCriteria ? "text-secondary" : " text-buttonPrimary"}  hover:bg-gray-100 capitalize cursor-pointer text-sm sm:text-base `}>{item} </div>
                        ))}
                    </div>
                </div>

                <div className='relative '>
                    <div onClick={() => {
                        setShowDate(!showDate)
                    }} className="  flex cursor-pointer text-xs sm:text-base bg-gray-100 items-center font-semibold p-2 px-5 sm:p-4 rounded-full text-buttonPrimary">
                        <MdOutlineDateRange className='mx-2 font-bold sm:block hidden text-lg' />
                        <button className="  capitalize">
                            {snap.defaultOrderFilterData}
                        </button>
                        <IoIosArrowDown className='sm:mx-2 font-bold text-lg sm:block hidden' />
                    </div>
                    <div className={`${showDate ? "" : "hidden"}  absolute  top-16 right-1 sm:right-10 z-10`}>
                        <DateRangePicker
                            color="#fff"
                            ranges={[selectionRange]}
                            onChange={handleSelect}
                            rangeColors={["#EA7A9A"]}
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default OrderPageFilter
