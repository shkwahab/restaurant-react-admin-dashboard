import React from 'react'
import {useSnapshot} from 'valtio';
import state from "../../../proxyState/store";
const RevenuSummary = () => {
  const filterCriteria = useSnapshot(state).orderFilterCriteria
  const revenueMap = [
    {
      filterCriteria: "today",
      revenue: 30000
    },
   ,
    {
      filterCriteria: "weekly",
      revenue: 200000
    },
    {
      filterCriteria: "monthly",
      revenue: 47602130
    }
  ]
  const TotalRevenue= revenueMap.reduce((acc, revenue) => acc + revenue.revenue, 0)
  return (
    <div className='my-4'>
      <h3 className='font-semibold text-xl lg:text-2xl my-2'>
        ${revenueMap.filter(revenue=>revenue.filterCriteria==filterCriteria).map(revenue=>revenue.revenue)}
      </h3>
      <p className='lg:text-base text-sm text-secondary'>
        from ${TotalRevenue}
      </p>
      <p className=' lg:text-base text-sm text-secondary my-2'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <h3 className='my-4 font-semibold text-base lg:text-xl text-buttonPrimary'>
        More Details
      </h3>
    </div>
  )
}

export default RevenuSummary
