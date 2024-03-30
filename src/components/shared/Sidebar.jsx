/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/const/navigation'
import { Link } from 'react-router-dom'


const linkClasses = 'flex mt-[15px] text-gray-500 hover:text-white active:text-white'

export default function Sidebar() {
  return (
    <div className='flex flex-col'>
      <div className='mt-[60px] ml-[60px] relative'>
        <div className='px-[50px] absolute'>
          <div className='absolute  item-center w-[29px] h-[29px]
           rounded-full bg-red-700 text-center  text-white'>4</div> 
        </div> 
        <img src='src/assets/img/Profile.svg' className='w-[72px] h-[72px] object-cover rounded-md '/>  
      </div>
      <div className='mt-[2px] ml-[60px] text-[30px] font-poppins font-semibold text-white'>Samantha</div> 
      <div className='mt-[1px]  text-[17px] ml-[60px] text-gray-500 font-poppins'>samantha@email.com</div> 
      
      <div className='mt-[70px] ml-[60px] text-[25px] font-poppins font-medium'>
 
        {DASHBOARD_SIDEBAR_LINKS.map((item) =>(
          <SidebarLink key={item.key} item={item} />
        ))}

        
      </div>  
      
    </div>
  )
}

function SidebarLink({ item }) {
  return (
    <Link to={item.path} className={linkClasses}>
      {item.label}
    </Link>
  )
}

