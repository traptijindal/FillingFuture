import React from 'react'
import WorkImg from './WorkImg'



const EndThisCrisis = () => {
  return (
   <div className='flex justify-center items-center mt-10 md:mt-20 mb-30 md:mb-40'>
     <div className='w-[90%] lg:w-[80%] '>
      <h1 className='text-[#1D3C49] font-bold text-xl md:text-4xl text-center'>Together, we can end this crisis</h1>
      <p className='text-center text-sm m-4 md:text-lg'>Since FillingFuture was founded in 2006, we’ve been chasing one ambitious goal: ending the global food crisis. And while the food crisis is huge, we’re optimistic. We know how to solve the problem, and we make progress every day thanks to the help of local partners and generous supporters. If we work together, we believe everyone will have access to life’s most basic need within our lifetime.</p>
       <WorkImg/>
    </div>
   </div>
  )
}

export default EndThisCrisis