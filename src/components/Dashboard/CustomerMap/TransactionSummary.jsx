import React from 'react'
import state from '../../../proxyState/store'
import { useSnapshot } from 'valtio'
import ArcProgressBar from '../../../utils/ArcProgressBar';
import { IoIosStats } from "react-icons/io";

const TransactionSummary = () => {
  const snap = useSnapshot(state)
  const monthlyData = {
    filter: "monthly",
    successOrders: 845,
    unsuccessfulOrders: 120,
  }
  const weekData = {
    filter: "weekly",
    successOrders: 545,
    unsuccessfulOrders: 110,
  }
  const todayData = {
    filter: "today",
    successOrders: 124,
    unsuccessfulOrders: 12,
  }
  return (
    <div className='my-10'>
      <div className="grid md:grid-cols-[7fr_1fr]">
        <div >
          <h2 className='font-bold font-primary text-xl'>
            Transaction Summary
          </h2>
          <div className={`flex  justify-between  ${snap.customerFilterCriteria === monthlyData.filter ? "" : "hidden"}`}>
            <div className='flex items-center'>
              <div className='sm:block hidden'>
                <ArcProgressBar strokeWidth={8} percentage={80} fontSize={16} radius={40} arcColor={"#54CD51"} />
              </div>
              <div className='sm:hidden '>
                <ArcProgressBar strokeWidth={4} percentage={80} fontSize={12} radius={30} arcColor={"#54CD51"} />
              </div>
              <div className='md:ml-8 sm:ml-6 ml-4'>
                <h3 className='text-gray-700 font-semibold md:text-3xl sm:text-2xl text-xl  my-2'>
                  {monthlyData.successOrders}
                </h3>
                <p className='text-secondary text-sm sm:text-base '>
                  Successful Orders
                </p>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='sm:block hidden'>
                <ArcProgressBar strokeWidth={8} percentage={20} fontSize={16} radius={40} arcColor={"#FF3770"} />
              </div>
              <div className='sm:hidden'>
                <ArcProgressBar strokeWidth={4} percentage={20} fontSize={12} radius={30} arcColor={"#FF3770"} />
              </div>
              <div className='md:ml-8 sm:ml-6 ml-4'>
                <h3 className='text-gray-700 font-semibold md:text-3xl sm:text-2xl text-xl  my-2'>
                  {monthlyData.unsuccessfulOrders}
                </h3>
                <p className='text-secondary text-sm sm:text-base '>
                  Unsuccessful Orders
                </p>
              </div>
            </div>


          </div>
          <div className={`flex justify-between ${snap.customerFilterCriteria === weekData.filter ? "" : "hidden"}`}>
            <div className='flex items-center'>
              <div className='sm:block hidden'>
                <ArcProgressBar strokeWidth={8} percentage={75} fontSize={16} radius={40} arcColor={"#54CD51"} />
              </div>
              <div className='sm:hidden'>
                <ArcProgressBar strokeWidth={4} percentage={75} fontSize={12} radius={30} arcColor={"#54CD51"} />
              </div>
              <div className='md:ml-8 sm:ml-6 ml-4'>
                <h3 className='text-gray-700 font-semibold md:text-3xl sm:text-2xl text-xl  my-2'>
                  {weekData.successOrders}
                </h3>
                <p className='text-secondary text-sm sm:text-base '>
                  Successful Orders
                </p>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='sm:block hidden'>
                <ArcProgressBar strokeWidth={8} percentage={25} fontSize={16} radius={40} arcColor={"#FF3770"} />
              </div>
              <div className='sm:hidden'>
                <ArcProgressBar strokeWidth={4} percentage={25} fontSize={12} radius={30} arcColor={"#FF3770"} />
              </div>
              <div className='md:ml-8 sm:ml-6 ml-4'>
                <h3 className='text-gray-700 font-semibold md:text-3xl sm:text-2xl text-xl  my-2'>
                  {weekData.unsuccessfulOrders}
                </h3>
                <p className='text-secondary text-sm sm:text-base '>
                  Unsuccessful Orders
                </p>
              </div>
            </div>
          </div>
          <div className={`flex justify-center ${snap.customerFilterCriteria === todayData.filter ? "" : "hidden"}`}>
            <div className='flex items-center'>
              <div className='sm:block hidden'>
                <ArcProgressBar strokeWidth={8} percentage={90} fontSize={16} radius={40} arcColor={"#54CD51"} />
              </div>
              <div className='sm:hidden'>
                <ArcProgressBar strokeWidth={4} percentage={90} fontSize={12} radius={30} arcColor={"#54CD51"} />
              </div>
              <div className='md:ml-8 sm:ml-6 ml-4'>
                <h3 className='text-gray-700 font-semibold md:text-3xl sm:text-2xl text-xl  my-2'>
                  {todayData.successOrders}
                </h3>
                <p className='text-secondary text-sm sm:text-base '>
                  Successful Orders
                </p>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='sm:block hidden'>
                <ArcProgressBar strokeWidth={8} percentage={10} fontSize={16} radius={40} arcColor={"#FF3770"} />
              </div>
              <div className='sm:hidden'>
                <ArcProgressBar strokeWidth={4} percentage={10} fontSize={12} radius={30} arcColor={"#FF3770"} />
              </div>
              <div className='md:ml-8 sm:ml-6 ml-4'>
                <h3 className='text-gray-700 font-semibold md:text-3xl sm:text-2xl text-xl  my-2'>
                  {todayData.unsuccessfulOrders}
                </h3>
                <p className='text-secondary text-sm sm:text-base '>
                  Unsuccessful Orders
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-5 mt-4 md:mt-0 md:mx-10'>
          <h2 className='md:mb-10 font-bold font-primary sm:text-lg text-base md:text-xl'>
            Average
          </h2>
          <div className={`flex ${snap.customerFilterCriteria === monthlyData.filter ? "" : "hidden"}`}>
            <div>
              <h3 className=' sm:text-xl text-lg md:text-2xl text-gray-700 font-primary font-bold'>
                84,763
              </h3>
              <p className='text-secondary text-sm sm:text-base  md:text-lg'>
                Orders
              </p>
            </div>
            <div>
              <IoIosStats className='text-5xl text-buttonPrimary' />
            </div>
          </div>
          <div className={`flex   ${snap.customerFilterCriteria === weekData.filter ? "" : "hidden"}`}>
            <div>
              <h3 className='sm:text-xl text-lg md:text-2xl text-gray-700 font-primary font-bold'>
                34,763
              </h3>
              <p className='text-secondary text-sm sm:text-base  md:text-lg'>
                Orders
              </p>
            </div>
            <div>
              <IoIosStats className='text-5xl text-buttonPrimary' />
            </div>
          </div>
          <div className={`flex   ${snap.customerFilterCriteria === todayData.filter ? "" : "hidden"}`}>
            <div>
              <h3 className='sm:text-xl text-lg md:text-2xl text-gray-700 font-primary font-bold'>
                12,763
              </h3>
              <p className='text-secondary text-sm sm:text-base  md:text-lg'>
                Orders
              </p>
            </div>
            <div>
              <IoIosStats className='text-5xl text-buttonPrimary' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionSummary
