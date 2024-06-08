import React from 'react'
import donate_1 from "/donation_1.png"
import donate_2 from "/donation_2.png"
import donate_3 from "/donation_3.png"

const SponsorHeader = () => {
  return (
    <div className='flex flex-row'>
      <img src={donate_1} alt="" className='w-[1/2] h-[30vw] mr-4'/>
      <img src={donate_2} alt="" className='w-[1/2] h-[30vw] mr-4'/>
      <img src={donate_3} alt="" className='w-[1/3] h-[30vw]'/>
    </div>
  )
}

export default SponsorHeader


