import React from 'react'
import donate_once from "/donate_once.png"

const Donate_Once= () => {
  return (
    <div className='flex flex-col md:flex-row p-2'>
      <div className='left w-full md:w-[60%] relative '>
        <img src={donate_once} alt="" className='md:w-[570px] lg:w-[650px] mb-4 relative z-10'/>
         <div className='absolute inset-y-0 left-0 w-1/2 bg-gradient-to-l from-white to-yellow-900 z-0'></div>
      </div>

      <div className='right w-[350px] md:w-[300px] lg:w-[350px] m-5 '>
        <div className='mb-10  mx-7 md:mx-0 '>
             <h1 className='text-2xl lg:text-3xl text-[#1D3C49] font-bold mb-4 md:mb-2'>Become a part of this noble cause</h1>
             <hr className='w-[20%] border-b border-t-2 border-[#FFA500] mb-4 md:mb-2'/>
             <p className='text-lg lg:text-xl text-[#2B5A6E]'>Together, we can build a nation where hunger is a thing of the past.</p>
        </div>
        <div className='mx-7 md:mx-0  rounded-xl shadow-lg shadow-[rgb(136,134,134)] p-4 flex flex-col items-center  '>
            <p className='text-[#1D3C49] '>Enter Amount to donate </p>
            <hr className='w-full border-b border-t-0 border-dotted border-black my-6'/>
            <input type="number " placeholder='Enter amount' className='mb-4 lg:mb-8 border border-b-slate-300 p-2'/>
         <button className='bg-[#FFA500] px-16 py-2 rounded-xl text-white '>Donate</button>
         <hr className='w-full border-b border-t-0 border-dotted border-black my-6'/>
           <p>It only takes 50 to bring 1 person reliable access to the food they deserve.</p> 
        </div>
      </div>
    </div>
  )
}

export default Donate_Once
