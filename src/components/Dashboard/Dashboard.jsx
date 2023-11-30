import React, { useState } from 'react'
import FeatureCards from './FeatureCards/featureCards'
import OrderSummary from './OrderSummary/OrderSummary'
import RevenueMap from './RevenueMap/RevenueMap'
import CustomerMap from './CustomerMap/CustomerMap'
const Dashboard = () => {

  return (
    <div>
      
      <FeatureCards />
      <div className="m-4 my-16 lg:grid lg:grid-cols-2  lg:gap-x-10 ">
        <div>
          <OrderSummary />
        </div>
        <div className='my-10 lg:my-auto'>
          <RevenueMap />
        </div>
      </div>
      <CustomerMap />
    </div>
  )
}

export default Dashboard
