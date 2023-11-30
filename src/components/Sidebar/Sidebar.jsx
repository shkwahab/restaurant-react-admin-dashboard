import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/img/logo.png"
import hamBurger from "../../assets/img/hamburgermenu.png"
import Dashboard from "../../assets/icons/dashboard.png"
import activeDashboard from "../../assets/icons/activeDashboard.png"
import Menu from "../../assets/icons/Menu.png"
import activeMenu from "../../assets/icons/activeMenu.png"
import orders from "../../assets/icons/orders.png"
import activeOrders from "../../assets/icons/activeOrders.png"
import customers from "../../assets/icons/customers.png"
import activeCustomers from "../../assets/icons/activeCustomer.png"
import { FaArrowRightLong } from "react-icons/fa6";
import analytics from "../../assets/icons/analytics.png"
import activeAnalytics from "../../assets/icons/activeAnalytics.png"
import state from '../../proxyState/store'
import { useSnapshot } from "valtio"
const Sidebar = ({ children }) => {
  const snap = useSnapshot(state)
  const list = [
    {
      link: "/",
      name: "Dashboard",
      activeIcon: activeDashboard,
      icon: Dashboard
    },
    {
      link: "/orders",
      name: "Orders",
      activeIcon: activeOrders,
      icon: orders
    },
    {
      link: "/menu",
      name: "Menu",
      activeIcon: activeMenu,
      icon: Menu
    },
    {
      link: "/customer",
      name: "Customers",
      activeIcon: activeCustomers,
      icon: customers
    },
    {
      link: "/analytics",
      name: "Analytics",
      activeIcon: activeAnalytics,
      icon: analytics
    },

  ]
  const path = useLocation().pathname
  return (
    <div>
      <aside id="default-sidebar" className={`bg-white  ${snap.mobileSidebar===false?" -left-96":""} lg:block fixed top-0 lg:left-0 left-0 z-40 w-64 h-screen  translate-x-0 transition-all duration-500`} aria-label="Sidebar">
        <div id="scrollBar" className="h-full px-3 py-4 overflow-y-auto  ">
          <div className="flex items-center  justify-between">
            <div className="">
              <img src={logo} className=' w-full' alt="logo" />
            </div>
            <div className='-mt-10 lg:block hidden'>
              <img src={hamBurger} alt={"hamburger-Icn"} />
            </div>
            <div className='mr-2 lg:hidden' onClick={()=>{
              state.mobileSidebar=false
            }}>
              <FaArrowRightLong className='text-3xl  text-buttonPrimary' />
            </div>
          </div>
          <ul className="space-y-2 font-medium">
            {
              list.map((item, index) => {
                return <Link key={index} to={item.link}>
                  <li className={` font-medium font-primary flex text-xl my-8 items-center ${path === item.link ? " bg-buttonPrimary font-semibold text-white rounded-full py-4 px-2" : "text-[#7C7C7C]"}`}>
                    <img className='mx-4' src={path === item.link ? item.activeIcon : item.icon} alt={item.name} />
                    <div>
                      {item.name}
                    </div>
                  </li>
                </Link>
              })
            }


          </ul>
        </div>
      </aside>

      <div className="  lg:ml-64">
        <div className=''>
          <Navbar />
        </div>
        <div className="">
          {children}
        </div>
      </div>

    </div>
  )
}

export default Sidebar
