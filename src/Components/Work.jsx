import React from 'react'
import WorkImg from './WorkImg'



const Work = () => {
  return (
   <div className='flex justify-center items-center mt-10 md:mt-20 mb-30 md:mb-40'>
     <div className='w-[90%] lg:w-[80%] '>
      <h1 className='text-[#1D3C49] font-bold text-2xl text-center'>Our Work</h1>
      <p className='text-center text-sm m-4 md:text-base'>We are on a mission to eradicate hunger and ensure no one goes to bed with an empty stomach. Our organization is dedicated to feeding the underprivileged across our nation, but we need your help. Your generous donation can make a significant impact and play a vital role in putting food on the tables of those in need.</p>
       <WorkImg/>
    </div>
   </div>
  )
}

export default Work
