import React, { useState } from 'react'
import state from "../../../proxyState/store"
import { useSnapshot } from 'valtio'
import { FaChevronDown } from "react-icons/fa";
import ChartRevenue from './ChartRevenue';
import { IoIosStats } from "react-icons/io";
import { filterDataRevenue } from './ChartRevenue';
const RevenueMap = () => {
  const snap = useSnapshot(state)
  const [showList, setShowList] = useState(false)
  const list = ["today", "weekly", "monthly"]
  const requiredData = filterDataRevenue
    .filter(data => data.filterCriteria === snap.revenueFilterCriteria)
  const totalRevenue = requiredData[0].data.slice(1).reduce((acc, data) => acc + data[1], 0)

  return (
    <div>
      <div className='font-primary'>
        <div className='flex justify-between'>
          <div>
            <h3 className=' sm:text-xl text-lg lg:text-2xl font-semibold'>
              Revenue
            </h3>
            <p className=" text-sm sm:text-base text-secondary">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div onClick={() => {
            setShowList(!showList)
          }}>
            <button className='text-sm sm:text-base flex justify-between items-center capitalize text-buttonPrimary bg-gray-200  px-4 py-2 rounded-2xl'>
              <div>
                {snap.revenueFilterCriteria}
              </div>
              <div>
                <FaChevronDown className='text-buttonPrimary ml-2 text-lg' />
                {showList && <div className='absolute right-10 lg:right-12 mt-5  bg-white rounded-2xl z-10'>
                  {list.map((item) => {
                    return <div key={item} onClick={() => {
                      state.revenueFilterCriteria = item
                    }} className='text-sm sm:text-base p-2 hover:bg-gray-200 cursor-pointer'>
                      {item}
                    </div>
                  })}
                </div>
                }
              </div>
            </button>
          </div>
        </div>

      </div>
      <div>
        <div className=" my-4 items-center  flex font-primary">
          <IoIosStats className='text-buttonPrimary text-3xl' />
          <div className=' sm:text-xl text-lg lg:text-2xl font-semibold mx-4'>
            ${totalRevenue}
          </div>
        </div>
      </div>
      <ChartRevenue />
    </div>

  )
}

export default RevenueMap
