import React from 'react'
import ArcProgressBar from '../../../utils/ArcProgressBar';
import { useSnapshot } from 'valtio';
import state from '../../../proxyState/store';
import RevenuSummary from './RevenueSummary';
import OrderStatus from './OrderStatus';

const OrderSummary = () => {
    const snap = useSnapshot(state)
    const successfullOrdersCritera = [{
        id: 1,
        name: "today",
        percentage: 85
    }, {
        id: 2,
        name: "weekly",
        percentage: 70
    }, {
        id: 3,
        name: "monthly",
        percentage: 67
    }]
    return (
        <div className='  '>
            <h3 className='font-semibold  text-xl'>
                Order Summary
            </h3>
            <div className=" flex font-primary justify-between items-center">
                <div>
                    <p className='sm:text-base text-sm text-secondary'>
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className='flex '>
                    <h3 onClick={() => {
                        state.orderFilterCriteria = 'monthly'
                    }} className={`text-sm sm:text-base  cursor-pointer mx-2 lg:mx-4 ${snap.orderFilterCriteria === "monthly" ? "text-buttonPrimary font-semibold decoration-[2px] underline underline-offset-[10px]" : "text-secondary"}`}>
                        Monthly
                    </h3>
                    <h3 onClick={() => {
                        state.orderFilterCriteria = 'weekly'
                    }} className={`text-sm sm:text-base decoration-[2px]  cursor-pointer mx-2 lg:mx-4 ${snap.orderFilterCriteria === "weekly" ? "text-buttonPrimary font-semibold underline  underline-offset-[10px]" : "text-secondary"}`}>Weekly</h3>
                    <h3 onClick={() => {
                        state.orderFilterCriteria = 'today'
                    }} className={`text-sm sm:text-base decoration-[2px]  cursor-pointer mx-2 lg:mx-4 ${snap.orderFilterCriteria === "today" ? "text-buttonPrimary font-semibold underline  underline-offset-[10px]" : "text-secondary"}`}>Today</h3>
                </div>

            </div>
            <div className=' my-4 grid grid-cols-2'>
                <div className="lg:block hidden">
                    <ArcProgressBar
                        percentage={
                            successfullOrdersCritera.filter(
                                (criter) => criter.name === snap.orderFilterCriteria
                            )[0].percentage
                        }
                        strokeWidth={14}
                        fontSize={30}
                        radius={80}
                        arcColor="#EA7A9A"
                    />
                </div>
                <div className="lg:hidden">
                    <ArcProgressBar
                        percentage={
                            successfullOrdersCritera.filter(
                                (criter) => criter.name === snap.orderFilterCriteria
                            )[0].percentage
                        }
                        strokeWidth={10}
                        fontSize={20}
                        radius={50}
                        arcColor="#EA7A9A"
                    />
                </div>
                <div className='mx-4  text-center font-primary'>
                    <RevenuSummary />
                </div>
            </div>
            <div>
                <OrderStatus />
            </div>



        </div>
    )
}

export default OrderSummary
