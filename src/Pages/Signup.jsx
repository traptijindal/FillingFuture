import React from 'react'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'

const Signup = () => {
  return (
    <div className='flex items-center justify-center min-h-screen mt-5 md:mt-10 overflow-hidden'>
      <div className='w-[300px] md:w-[350px] shadow-lg shadow-[rgb(136,134,134)]  p-6'>
        <h1 className='text-[#002844] font-bold text-xl md:text-2xl text-center mb-6'>Sign up for <span className='text-[#FFA500]'>Filling</span>Future</h1>
        <input type="text" placeholder="Email"    className='pr-10 md:pr-20 pl-5 py-2 ml-2 border border-[#BAC8CE] rounded-sm my-4 text-start'/>
      <input type="text" placeholder="Password" className='pr-10 md:pr-20 pl-5 py-2 ml-2 border border-[#BAC8CE] rounded-sm   mb-4 text-start'/>
        <button className='w-[95%] px-6 py-2 bg-[#FFA500] text-white rounded-lg flex items-center justify-center mx-auto font-semibold'>
           Create account
        </button>
        <div className='flex w-full items-center justify-center my-4'>
        <hr className='w-[39%] border-t-2 border-[#BAC8CE]' />
        <p className='px-4'>or</p>
        <hr className='w-[39%] border-t-2 border-[#BAC8CE]' />
      </div>
      
      <button className='w-[95%] px-6 py-2  bg-[#3A579D] text-white rounded-lg flex items-center justify-center mx-auto my-4'>
          <FaFacebookF className='mr-4' /> Sign up with Facebook
       </button>
       <button className='w-[95%] px-6 py-2  bg-[#4285F4] text-white rounded-lg flex items-center justify-center mx-auto my-4'>
          <FaGoogle className='mr-4' /> Sign up with Google
       </button>
        <p className='text-center text-[#737F86] text-xs mb-8'>Our <span className='underline'>Terms of Service</span> apply. For more info on our data processing, see our <span className='underline'>Privacy Policy</span></p>
        <p className='text-center text-[#3387ED] text-sm'>Already have an account?</p>
      </div>
    </div>
  )
}

export default Signup
