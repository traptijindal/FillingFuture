import React from 'react'
import child from '../assets/images/child.png';

const Header = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row md:ml-10 lg:ml-20'>
      <div className='w-full md:w-[40%] flex justify-center items-center mt-5'>
          <div className='px-2 mx-4 lg:px-8 '>
                <h1 className='flex flex-wrap text-[#1D3C49] font-bold mb-2 text-2xl lg:text-4xl'>Help  Us Nourish Our Nation</h1>
                <p className='flex flex-wrap text-base lg:text-xl mb-4 md:mb-2'>Our organization is dedicated to feeding the underprivileged across our nation, but we need your help.</p>
                <button className='bg-[#FFA500] text-[#FFFFFF] py-3 rounded-lg px-8 lg:px-16 my-2 lg:my-5 text-xl'>Join Us Now</button>
          </div>
      </div>

      <div className='w-full md:w-[70%] relative flex '>
             <img src={child} alt="" className='w-full h-[160px] md:h-[300px] lg:h-[400px] relative z-10'/>
             <div className='absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-black z-0'></div>
      </div>

    </div>
  )
}

export default Header




