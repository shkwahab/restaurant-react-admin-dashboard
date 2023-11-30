import React from 'react'
import NotificationBell from "../../assets/icons/notification.png"
import Chat from "../../assets/icons/chat.png"
import Bonus from "../../assets/icons/bonus.png"
import Setting from "../../assets/icons/setting.png"
import { IoIosArrowDown } from "react-icons/io";
import search from "../../assets/icons/search.png"
import logo from "../../assets/img/siteIcon.png"
import hamburgeIcon from "../../assets/img/hamburgermenu.png"
import profile from "../../assets/icons/profilePic.jpg"
import state from '../../proxyState/store'
const Navbar = () => {
  const widgets = [
    {
      dotCounter: 1,
      counterColor: "#EA7A9A",
      icon: NotificationBell,
    },
    {
      dotCounter: 2,
      counterColor: "#EA7A9A",
      icon: Chat,
    },
    {
      dotCounter: 3,
      counterColor: "#3E4954",
      icon: Bonus,
    },
    {
      dotCounter: "!",
      counterColor: "#FF6D4D",
      icon: Setting,
    },
  ]
  const mobiwidgets = [
    {
      dotCounter: 1,
      counterColor: "#EA7A9A",
      icon: NotificationBell,
    },

    {
      dotCounter: 3,
      counterColor: "#3E4954",
      icon: Bonus,
    },
  ]
  return (
    <div className='m-4'>
      <nav className="flex justify-between items-center  lg:grid lg:grid-cols-[4fr_1fr]">
        <div className='lg:hidden'>
          <div className="flex items-center">
            <div className='mr-2'>
              <img className='w-12' src={logo} alt={"logo"} />
            </div>
            <div className='-mt-8' onClick={()=>{
              state.mobileSidebar=true
            }}>
              <img src={hamburgeIcon} alt="hamburger-menu"/>
            </div>
          </div>
        </div>
        <div className=" lg:flex justify-between items-center">
          <div className='lg:block hidden'>
            <h2 className={`font-semibold text-2xl font-primary`}>
              Dashboard
            </h2>
            <p className=' text-[#969BA0] font-primary'>
              Welcome to your dashboard, Ria!
            </p>
          </div>
          <div>
            <div className='lg:flex hidden items-center'>
              <input type="text" name="" id="" placeholder='Search' className=' outline-none w-[300px] py-4 placeholder:text-[#969BA0] text-buttonPrimary' />
              <img src={search} alt="search-icon" />
            </div>
          </div>
          <div className='hidden lg:flex'>
            {
              widgets.map((widget, index) => {
                return <div className='lg:ml-8  ' >
                  <img src={widget.icon} alt={"widgets"} />
                </div>
              })
            }
          </div>

        </div>
        <div className="flex justify-end ">
          <div className='sm:hidden flex mr-4'>
            {
              mobiwidgets.map((widget, index) => {
                return <div className='lg:ml-8 mx-2 ' >
                  <img src={widget.icon} alt={"widgets"} />
                </div>
              })
            }
          </div>
          <div className='lg:hidden hidden sm:flex mr-4'>
            {
              widgets.map((widget, index) => {
                return <div className='lg:ml-8 mx-2 ' >
                  <img src={widget.icon} alt={"widgets"} />
                </div>
              })
            }
          </div>
          <div className='flex'>
            <div>
              <img src={profile} alt="user-img" className=' aspect-square w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover object-center' />
            </div>
            <div className='hidden lg:block ml-4'>
              <h3 className='font-semibold  font-primary'>
                Ria Rodriguez
              </h3>
              <p className='text-[#969BA0]  font-primary'>
                Admin
              </p>
            </div>
            <IoIosArrowDown className=' lg:block hidden text-buttonPrimary  sm:text-xl ml-2 ' />
          </div>
        </div>
      </nav>
      <div className='m-4 lg:hidden'>
        <h2 className={`font-semibold text-2xl font-primary`}>
              Dashboard
            </h2>
            <p className=' text-[#969BA0] font-primary'>
              Welcome to your dashboard, Ria!
            </p>
      </div>
    </div>
  )
}

export default Navbar
