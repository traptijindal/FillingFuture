import React from 'react'

const Sponsor_Column = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:p-20'>
      <div className=' md:text-center px-10 mt-10'>
         <h2 className='font-bold text-xl mb-2 md:text-2xl'>We prove every project</h2>
         <p className='text-sm md:text-base'>Once completed, we will show you the food projects you funded with photos and GPS coordinates. Your virtual recognition will be featured on our Completed Projects Map.</p>
      </div>
      <div className='md:text-center px-10  mt-10'>
         <h2 className='font-bold text-xl mb-2 md:text-2xl'>Become Sponsor</h2>
         <p className='text-sm md:text-base'>Your support is crucial. Join us in this important cause and be a part of something much bigger than ourselves. Together, lets feed the hungry and make a difference in the lives of countless individuals and families. </p>
      </div>
    </div>
  )
}

export default Sponsor_Column
