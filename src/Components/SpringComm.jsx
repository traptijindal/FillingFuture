import React from 'react'

const SpringComm = () => {
  return (
    <div className='w-[80%]  lg:w-[60%] mx-auto my-10'>
     <div className='p-2'>
     <h1 className=' md:text-center font-bold text-2xl my-2'>Meet the community changing lives.</h1>
      <p className ='md:text-center text-base text-center'>The Spring is composed of generous, passionate, and determined people — like you — from more than 100 countries around the world. Our members have already transformed over a million lives with access to clean water, sanitation, and hygiene. Stand with us and change millions more. You’re going to fit right in. </p>
     </div>
       
       <div className='flex flex-col lg:flex-row my-10'>
       <div className=''>
        <img src="/Ellipse 2.png" alt="" className='mx-auto'/>
        <div className='shadow-lg shadow-[rgb(136,134,134)] p-2  mr-4  lg:h-[290px] mb-5 rounded-lg flex items-center'>
             <p className ='text-sm lg:text-base'>“I used to have monthly subscriptions with several different companies. But then the makeup, tote bags, and international snacks started to accumulate. With The Spring, I can donate that money and see the impact support makes around the world.”  </p>
        </div>
    </div>
       
    <div>
        <img src="/Ellipse 3.png" alt="" className='mx-auto'/>
        <div className='shadow-lg shadow-[rgb(136,134,134)] p-2  mr-4 lg:h-[290px]  mb-5 rounded-lg flex items-center'>
             <p className ='text-sm lg:text-base'>“The Spring is not just a subscription. Its a community of passionate investors. Being part of The Spring makes me hopeful that there will be more children who can dream bigger because they dont have to carry the weight of dirty food.”</p>
        </div>
    </div>

    <div>
        <img src="/Ellipse 4.png" alt="" className='mx-auto'/>
        <div className='shadow-lg shadow-[rgb(136,134,134)] p-2 lg:h-[290px] mb-5 rounded-lg flex items-center'>
             <p className='text-sm lg:text-base '>“I am currently an environmental engineer working on improving New York City food quality. Food is something that is very important to me, and access to clean food is something that we often take for granted.” </p>
        </div>
    </div>
       </div>
    </div>
  )
}

export default SpringComm
