import React from 'react'
import TrendingProduct from "../../../assets/img/food.jpg"
const DailyTrendingMenu = () => {
  const TrendingMenu = [
    {
      id: 1,
      name: 'Chicken Burger',
      price: 20,
      order: 400,
      img: TrendingProduct
    },
    {
      id: 2,
      name: 'Chicken Tikka',
      price: 10,
      order: 50,
      img: TrendingProduct
    },
    {
      id: 3,
      name: 'Fried Chicken',
      price: 40,
      order: 60,
      img: TrendingProduct
    },
    {
      id: 4,
      name: 'Zinger Burger',
      price: 5,
      order: 660,
      img: TrendingProduct
    },
    {
      id: 5,
      name: 'Ice Cream',
      price: 4,
      order: 900,
      img: TrendingProduct
    },
    {
      id: 6,
      name: 'Sauteed Chicken',
      price: 44,
      order: 412,
      img: TrendingProduct
    },
    {
      id: 7,
      name: 'Mutton Karahi',
      price: 55,
      order: 322,
      img: TrendingProduct
    },
    {
      id: 8,
      name: 'AndaWala Burger',
      price: 14,
      order: 312,
      img: TrendingProduct
    },
    {
      id: 9,
      name: 'Biryani',
      price: 60,
      order: 300,
      img: TrendingProduct
    },
  ]
  return (
    <div className='mx-10'>
      <h2 className="text-xl font-bold font-primary">
        Daily Trending Menu
      </h2>
      <p className="text-secondary">
        Lorem ipsum dolor
      </p>
      <div>
        {TrendingMenu.map((menu) => {
          return <div key={menu.id} className="   font-primary grid grid-cols-[1fr_3fr_1fr] my-4">
            <div className='mt-4'>
              <h2 className=' text-secondary text-xl font-bold'>
                #{menu.id}
              </h2>
            </div>
            <div className=''>
              <h2 className=' text-lg font-semibold'>
                {menu.name.slice(0, 50)}
              </h2>
              <div className="flex items-center ">
                <h3 className='text-lg font-bold text-gray-800'>
                  ${menu.price}
                </h3>
                <p className='mx-2 text-gray-500'>
                  Order &nbsp;
                  <span className='font-bold text-gray-800'>
                    {menu.order}x
                  </span>
                </p>
              </div>
            </div>
            <div>
              <img src={menu.img} alt={menu.name} className='w-14 aspect-square rounded-md object-cover object-center' />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default DailyTrendingMenu
