import React from 'react'
import hero from '/Hero_image.png'

const AboutHeader = () => {
  return (
  <div className='flex flex-col items-center justify-center mx-5 mt-10'>
      <div >
      <h1 className='text-[#1D3C49] text-3xl font-bold mb-4'>About Us</h1>
      <p className='mb-7 text-xl font-semibold'><span className='text-[#FFA500]'>Filling</span><span className='text-[#1D3C49]'>Future is a nonprofit organization bringing food to people around the world.</span> </p>
      <img src={hero} alt="" className='w-full max-w-[650px] h-auto mx-auto rounded'/>
    </div>
  </div>
  )
}

export default AboutHeader


