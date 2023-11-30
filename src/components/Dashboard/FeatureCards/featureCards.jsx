import React from 'react'
import totalMenu from "../../../assets/icons/totalMenu.png"
import totalRevenue from "../../../assets/icons/totalRevenue.png"
import totalOrders from "../../../assets/icons/totalOrders.png"
import totalCustomers from "../../../assets/icons/totalCustomers.png"
const featureCards = () => {
    const cards = [
        {
            id:1,
            title:'Total Menus',
            count:459,
            icon:totalMenu,
        },
        {
            id:2,
            title:'Total Revenue',
            count:"$ 87,561",
            icon:totalRevenue,
        },
        {
            id:3,
            title:'Total Orders',
            count:300,
            icon:totalOrders,
        },
        {
            id:4,
            title:'Total Customers',
            count:320,
            icon:totalCustomers,
        },
    ]
    return (
        <div className=' flex flex-wrap lg:m-auto m-4 lg:grid lg:grid-cols-4  '>
            {
                cards.map((card)=>{
                    return <div key={card.id} className='my-4  lg:static relative lg:h-auto h-[150px]  bg-cover bg-center  bg-feature-cardbg rounded-2xl mx-4   p-4'>
                    <div className=" lg:w-auto w-[280px] relative  z-10 ">
                        <div className="flex mx-4 mt-4 sm:m-auto">
                            <div className='text-white absolute'>
                                <h3 className='font-semibold lg:text-2xl text-3xl mb-2 '>
                                    {card.count}
                                </h3>
                                <p className= ' text-lg  lg:text-base'>
                                    {card.title}
                                </p>
                            </div>
                            <div className='lg:static -mt-4 sm:mt-auto   absolute right-0 px-4 lg:p-0 lg:pl-32 '>
                                <img className=' w-[100px] sm:w-auto '  src={card.icon} alt="featured cards" />
                            </div>
                        </div>
                    </div>
                </div>
                })
            }
            
        </div>
    )
}

export default featureCards
