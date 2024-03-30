/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
  return (
    <div className='flex flex-basis bg-black h-full'>
      <div className='basis-1/4 bg-black p-4 z-0 box-content h-full w-1/4'>
        <Sidebar/>
      </div>
      <div className='basis-3/4 bg-white  z-1 box-content h-full w-3/4 m-[20px] rounded-[20px] '>
        <Header/>
        <div>{<Outlet/>}</div>
      </div>
      
    </div>
  )
}
