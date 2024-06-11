import React from 'react'
import founder from "/profile-pic (3) 1.png"

const Founder = () => {
  return (
    <>
    <hr className='border-b border-[#d3cdcd]   border-t-0  mx-4 md:mx-20 lg:mx-48  mt-10 ' />
    <div className='flex    flex-col             md:flex-row items-center justify-center mt-5'>
      <div className='left md:w-[40%] md:mr-4 p-2 mt-10 md:mt-0'>
      <h2 className='text-[#2B5A6E] text-2xl font-bold mb-5'>Our Founder</h2>
      <h1 className='text-[#1D3C49] text-3xl font-bold mb-2'>Hari Om Prakash</h1>
      <p className='text-[#2B5A6E] text-sm md:text-base '>After a decade of indulging his darkest vices as a nightclub promoter, Hari Om Prakash declared spiritual, moral, and emotional bankruptcy. He spent two years on a hospital ship off the coast of Liberia, saw the effects of starvation over the people, and came back to India on a mission.</p>
    </div>
    <div className='right md:w-[30%] md:mt-7'>
      <img src={founder} alt="" className='w-[300px] h-[300px]'/>
    </div>
   </div>
   </>
  )
}

export default Founder
