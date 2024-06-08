import React from 'react'


const GlobalComm = () => {
  return (
   <div className='flex flex-col-reverse md:flex-row items-center justify-center '>
      <div className='left  rounded-2xl bg-white flex flex-col items-center justify-center shadow-lg shadow-[rgb(136,134,134)] p-5 h-[300px] w-[250px] md:h-[400px] md:w-[300px] '>
       <p className='mb-4 flex items-center justify-center text-[#1D3C49] font-bold text-lg'style={{ 
          backgroundImage: 'url(/S.png)', 
          backgroundSize: 'contain', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center', 
          height: '100px', // set desired height 
          width: '100px' // set desired width 
        }}>
          Spring
        </p>
        <p className='mb-4 text-xs md:text-base'>Spring members are monthly donors committed to making an impact towards feeding people. They donate a fixed amount of 99 every single month.</p>
        <p className='mb-4 text-xs font-bold md:text-base'>A 999 monthly donation can feed 2 people for 2 months.</p>
        
        </div>
        <div className=' right w-full md:w-[40%] p-5 lg:p-20 md:ml-10'>
            <h1 className='text-[#1D3C49] font-bold text-lg mb-4'>Join the global community serving <span className='underline underline-offset-4  decoration-[#FFA500] rounded-sm' style={{ textDecorationThickness: '4px' }}>$53,165</span> people every month </h1>
            
            <p className='mb-2 text-sm'>When you give to <span className='text-[#FFA500] font-semibold'>Filling</span><span className='font-semibold text-[#1D3C49]'>Future</span>, 100 your donation goes directly to funding food solutions in rural communities. We won’t stop until everyone, everywhere has access to clean food. But we need our monthly giving community.</p>
            <p className='mb-2 text-sm'>The Spring is essential to this cycle. We count on monthly gifts to fill in any funding gaps that may arise or account for potential changes in project completion. The Spring enables us to fund our local partners with confidence and make the best long term investments in rural communities.</p>
            <button className='bg-[#FFA500] text-[#FFFFFF] py-2 rounded-lg px-4 lg:px-7 w-full'>Pay $999</button>
        </div>
    
    </div>
   
  )
}

export default GlobalComm
