import React from 'react'
import spring from '/spring.png'
import { Link } from 'react-router-dom'

const Subscription = () => {
  return (
    <div className='relative mb-20'>
      
        <img src={spring} alt="" className=' w-[70%] h-[300px] md:w-[60%] md:h-[600px] mt-20 '/>
      <div className='absolute top-1/3 left-[70%]  rounded-2xl bg-white flex flex-col items-center justify-center shadow-lg shadow-[rgb(136,134,134)] p-5 md:p-10 h-[320px] w-[200px] md:h-[550px] md:w-[400px] 'style={{ transform: 'translate(-50%, -25%)' }}>
       <p className='mb-4 flex items-center justify-center text-[#1D3C49] font-bold text-xl md:text-3xl'style={{ 
          backgroundImage: 'url(/S.png)', 
          backgroundSize: 'contain', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center', 
          height: '170px', // set desired height 
          width: '170px' // set desired width 
        }}>
          Spring
        </p>
        <p className='mb-2 md:mb-4 text-xs md:text-base'>Spring members are monthly donors committed to making an impact towards feeding people. They donate a fixed amount of 99 every single month.</p>
        <p className='mb-2 md:mb-4 text-xs font-bold md:text-base'>A 999 monthly donation can feed 2 people for 2 months.</p>
        <Link to='/subscription'><button className='bg-[#FFA500] text-[#FFFFFF] text-base md:text-2xl  md:my-4 py-2 md:py-3 rounded-lg px-10 lg:px-20 w-full'>Join Spring</button></Link>
       
      </div>
    </div>
  )
}

export default Subscription
