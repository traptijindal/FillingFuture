// import React from 'react'
// import springHeader from '/springHeader.png'

// const SpringHeader = () => {
//   return (
//     <div className=''>
//        <img src={springHeader} alt="" className='relative w-full'/>
//        <div className='p-5 absolute inset-0 w-[40%] flex flex-col items-center justify-center mb-10 bg-white'>
//          <h1 className='text-[#1D3C49]'>Give people clean and safe food every month</h1>
//          <hr className='border-b border-[#FFA500] w-[25%] my-4'/>
//          <p className='text-center'>In our country, there are countless individuals and families struggling to put food on the table, facing hunger and malnutrition on a daily basis. We believe that no one should go to bed hungry. Your generous donations can make a significant impact in fighting this battle against hunger.
//          Every penny you contribute will directly go into providing nutritious meals to those in need. Together, we can nourish bodies and souls, ensuring that our fellow citizens have access to basic sustenance.
//         </p>
//        </div>
//     </div>
//   )
// }

// export default SpringHeader

import React from 'react'
import springHeader from '/springHeader.png'

const SpringHeader = () => {
  return (
    <div className='relative mb-52 lg:mb-20'>
      <img src={springHeader} alt="Spring Header" className='w-full md:w-[80%] lg:w-[80%] h-[200px] md:h-[300px] lg:h-[450px] mx-auto object-cover'/>
      <div className='absolute inset-0 flex items-center justify-center mt-[250px]'>
        <div className='bg-white p-5 rounded-3xl shadow-lg shadow-[rgb(136,134,134)] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] text-center'>
          <h1 className='text-[#1D3C49] font-bold text-sm md:text-lg lg:text-xl mb-4'>Give people clean and safe food every month</h1>
          <hr className='border-b-2 border-[#FFA500] w-[25%] mx-auto mb-4'/>
          <p className='text-[#1D3C49] text-xs md:text-sm lg:text-base'>
            In our country, there are countless individuals and families struggling to put food on the table, facing hunger and malnutrition on a daily basis. We believe that no one should go to bed hungry. Your generous donations can make a significant impact in fighting this battle against hunger.
            Every penny you contribute will directly go into providing nutritious meals to those in need. Together, we can nourish bodies and souls, ensuring that our fellow citizens have access to basic sustenance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpringHeader
