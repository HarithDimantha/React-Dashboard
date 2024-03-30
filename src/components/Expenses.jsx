/* eslint-disable no-unused-vars */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { FaCalendar } from 'react-icons/fa'
import Chart from './chart'
import { GrAdd } from "react-icons/gr";
import { IoMdCart } from "react-icons/io";
import { FaBusSimple } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { FaBowlFood } from "react-icons/fa6";
import { TbAlignBoxCenterMiddleFilled } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";




export default function Expenses() {
  return (
    <div className='flex flex-basis relative'>
      <div className='ml-[80px] mt-[80px] mb-[40px] basis-2/3 w-2/3'>
        <div className='flex justufy-between item-center '>
          <div className=''>
            <div className='font-poppins font-semibold text-[40px]'>
              Expenses
            </div>
            <div className='mt-[5px] font-poppins text-gray-500'>
              01 - 25 March, 2020
            </div>
          </div>
          <div className='flex relative mt-[5px] px-[150px] relative'>
            <img className='h-10 w-10 absolute z-2 rounded-full ml-[85px] bg-cover bg-no-repeat bg center border-white border-2' 
            src="src/assets/img/G3.svg"alt="G3.svg"/>
            <img className='h-10 w-10 z-1 absolute  rounded-full ml-[55px] bg-cover bg-no-repeat bg center border-white border-2' 
            src="src/assets/img/G2.svg"/>
            <img className='h-10 w-10 z-0 rounded-full ml-[25px] bg-cover bg-no-repeat bg center border-white border-2' 
            src="src/assets/img/G1.svg"/>
            <div className='h-[38px] w-[38px] rounded-full ml-[70px] bg-cover bg-no-repeat bg-center border-[#D2DCE8] text-[#D2DCE8] text-[25px] border-2'>
              <GrAdd className='ml-[0.5px] mt-[5px]'/>
            </div>

          </div>
        </div>
        <div className='mt-[40px] mb-[40px]'>
          <Chart/>
        </div>
        
        <div className='font-poppins'>
          <div className='flex w-[440px]'>
            <div className='font-bold'>Today</div>
            <div className='text-[#D2DCE8] mt-[5px] ml-[440px]'> <BsThreeDots/></div>
          </div>
          <hr className='mt-[10px] w-[510px]'/>
         
          <div className='mt-[20px] ml-[10px] w-[500px] h-full space-y-4'>
            
            <div className='flex gap-[10px] w-[500px]'>
              <div className='rounded-full bg-blue-500 text-white w-[48px] h-[48px] flex items-center justify-center'>
                <IoMdCart/>
              </div>
                <div className='flex justify-between w-[500px]'>
                  <div className='flex-col'>
                    <div className='text-black text-[16px] font-medium'>Grocery</div>
                    <div className='text-gray-500 text-[14px]'>5.12 pm . Belanja de pasar</div>
                  </div>
                  <div className='text-[16px] font-semibold'>-326,800</div>
                </div>  
            </div>

            <div className='flex gap-[10px] '>
              <div className='rounded-full bg-purple-600 text-white w-[48px] h-[48px] flex items-center justify-center'>
                <FaBusSimple/>
              </div>
                <div className='flex justify-between w-[500px]'>
                  <div className='flex-col'>
                    <div className='text-black text-[16px] font-medium'>Transportation</div>
                    <div className='text-gray-500 text-[14px]'>5:12 pm  •  Naik bus umum</div>
                  </div>
                  <div className='text-[16px] font-semibold'>-15.000</div>
                </div>  
            </div>

            <div className='flex gap-[10px] '>
              <div className='rounded-full bg-orange-500 text-white w-[48px] h-[48px] flex items-center justify-center'>
                <IoMdHome/>
              </div>
                <div className='flex justify-between w-[500px]'>
                  <div className='flex-col'>
                    <div className='text-black text-[16px] font-medium'>Housing</div>
                    <div className='text-gray-500 text-[14px]'>5:12 pm  •  Bayar Listrik</div>
                  </div>
                  <div className='text-[16px] font-semibold'>-185.750</div>
                </div>  
            </div>

          </div>  
        </div>

        <div className='mt-[80px] font-poppins'>
          <div className='flex w-[440px]'>
            <div className='font-bold'>Monday, 23 March 2020</div>
            <div className='text-[#D2DCE8] mt-[5px] '> </div>
          </div>
          <hr className='mt-[10px] w-[510px]'/>
         
          <div className='mt-[40px] ml-[10px] w-[500px] h-full space-y-4'>
            
            <div className='flex gap-[10px] w-[500px] mt-[10px]'>
              <div className='rounded-full bg-[#DC3434] text-white w-[48px] h-[48px] flex items-center justify-center'>
                <FaBowlFood/>
              </div>
                <div className='flex justify-between w-[500px]'>
                  <div className='flex-col'>
                    <div className='text-black text-[16px] font-medium'>Food and Drink</div>
                    <div className='text-gray-500 text-[14px]'>5:12 pm  •  Makan Steak</div>
                  </div>
                  <div className='text-[16px] font-semibold'>-156.000</div>
                </div>  
            </div>

            <div className='flex gap-[10px] '>
              <div className='rounded-full bg-[#4BA83D] text-white w-[48px] h-[48px] flex items-center justify-center'>
                <TbAlignBoxCenterMiddleFilled/>
              </div>
                <div className='flex justify-between w-[500px]'>
                  <div className='flex-col'>
                    <div className='text-black text-[16px] font-medium'>Entertainment</div>
                    <div className='text-gray-500 text-[14px]'>5:12 pm  •  Nonton Bioskop</div>
                  </div>
                  <div className='text-[16px] font-semibold'>-35.200</div>
                </div>  
            </div>
         
          </div>
        </div>  

      </div>

      <div className='basis-2/3 w-1/3 h-full mb-[40px] bg-[#F9FAFC] absolute right-0 rounded-r-[20px] inline-block'>
        <div className='mt-[96px] ml-[60px] font-poppins font-medium text-[20px] text-gray-800'> What yor money go?</div>
        <div className='mt-[30px] ml-[60px] mr-[40px] font-poppins'>
          <div className=''>
            <div className='flex justify-between font-medium text-[13px] '>
              <div>Food and Drinks</div>
              <div>872.400</div>
            </div>
            <div className='mt-[10px]'>
              <div className='w-full h-[5px] bg-gray-200 rounded-full'>
                <div className="h-full bg-[#31BA96] rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>  

          <div className='mt-[30px]'>
            <div className='flex justify-between font-medium text-[13px] mt-[20px]'>
              <div>Shopping</div>
              <div>1.378.200</div>
            </div>
            <div className='mt-[10px]'>
              <div className='w-full h-[5px] bg-gray-200 rounded-full'>
                <div className="h-full bg-[#31BA96] rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div> 

          <div className='mt-[30px]'>
            <div className='flex justify-between font-medium text-[13px] mt-[20px]'>
              <div>Housing</div>
              <div>928.500</div>
            </div>
            <div className='mt-[10px]'>
              <div className='w-full h-[5px] bg-gray-200 rounded-full'>
                <div className="h-full bg-[#31BA96] rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div> 

          <div className='mt-[30px]'>
            <div className='flex justify-between font-medium text-[13px] mt-[20px]'>
              <div>Transportation</div>
              <div>420.700</div>
            </div>
            <div className='mt-[10px]'>
              <div className='w-full h-[5px] bg-gray-200 rounded-full'>
                <div className="h-full bg-[#31BA96] rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div> 
          
          <div className='mt-[30px]'>
            <div className='flex justify-between font-medium text-[13px] mt-[20px]'>
              <div>Vehicle</div>
              <div>520.000</div>
            </div>
            <div className='mt-[10px]'>
              <div className='w-full h-[5px] bg-gray-200 rounded-full'>
                <div className="h-full bg-[#31BA96] rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div> 
        </div>

        <div className='bg-[#EDF0F6] w-[250px] h-[258px] rounded-lg p-4 ml-[60px] mt-[80px] relative'>
          <div><img src='src/assets/img/illustration1.svg' 
          className='w-[84px] h-[72px] absolute  left-2 -top-4 '/>
                <img src='src/assets/img/illustration2.svg' 
          className='w-[52px] h-[90px] absolute -top-8 right-2 '/>
          </div>
          <div className='pl-[10px] mt-[80px] text-[16px]'>Save more money</div>
          <div className='pl-[10px] text-[12px] text-gray-600 font-regular'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
          <div className="w-[200px] h-[40px] mt-[20px] ml-[10px] rounded-lg text-center p-2 bg-[#101010] text-white text-[13px] font-semibold">VIEW TIPS</div>
        </div>
      
      </div>
    </div>
  )
}
