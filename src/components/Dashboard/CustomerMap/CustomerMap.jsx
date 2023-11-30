import React from 'react'
import DailyTrendingMenu from './DailyTrendingMenu'
import TransactionSummary from './TransactionSummary'
import CustomerMapFilter from './CustomerMapFilter'
import CustomerMapChart from './CustomerMapChart'
const CustomerMap = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className='mx-4 md:mx-auto'>
           <CustomerMapFilter/>
           <CustomerMapChart/>
           <TransactionSummary/>
        </div>
        <div className='my-4 md:my-0 lg:-mt-3'>
            <DailyTrendingMenu/>
        </div>
      </div>
    </div>
  )
}

export default CustomerMap
