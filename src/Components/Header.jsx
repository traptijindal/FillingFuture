import React from 'react'
import child from '../assets/images/child.png';

const Header = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center '>
      <div className='md:w-[30%]  lg:w-[40%] flex justify-center items-center'>
          <div className='m-7 md:m-0'>
                <h1 className='flex flex-wrap text-[#1D3C49] font-bold mb-2 text-2xl lg:text-3xl'>Help  Us Nourish Our Nation</h1>
                <p className='flex flex-wrap  text-[12px] lg:text-base mb-4 md:mb-2'>Our organization is dedicated to feeding the underprivileged across our nation, but we need your help.</p>
                <button className='bg-[#FFA500] text-[#FFFFFF] py-1 rounded-lg px-4 lg:px-7 '>Join Us Now</button>
          </div>
      </div>

      <div className=' md:w-[60%] lg:w-[50%]'>
             <img src={child} alt="" className='w-full h-[180px] md:h-auto'/>
      </div>
    </div>
  )
}

export default Header




