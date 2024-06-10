import React from 'react'
import hero from '/Hero_image.png'

const AboutHeader = () => {
  return (
  <div className='flex flex-col items-center justify-center m-5  lg:mx-5 mt-10'>
      <div >
      <h1 className='text-[#1D3C49] text-3xl md:text-4xl lg:text-5xl font-bold mb-7'>About Us</h1>
      <p className='mb-5 md:mb-16 text-lg md:text-2xl lg:text-3xl  '><span className='text-[#FFA500]'>Filling</span><span className='text-[#1D3C49]'>Future is a nonprofit organization bringing food to people around the world.</span> </p>
      {/* <img src={hero} alt="" className='w-full max-w-[650px] h-auto mx-auto rounded'/> */}
      <img src={hero} alt="" className='w-[500px] md:w-[700px] lg:w-[900px]  mx-auto rounded'/>
    </div>
  </div>
  )
}

export default AboutHeader


