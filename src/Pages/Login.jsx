import React from 'react'
import { FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa'

const Login = () => {
  return (
    <div className='flex items-center justify-center min-h-screen mt-5 md:mt-10 overflow-hidden'>
      <div className='w-[300px] md:w-[350px] shadow-lg shadow-[rgb(136,134,134)]  p-6'>
        <h1 className='text-[#002844] font-bold text-2xl text-center mb-6'>Log in to <span className='text-[#FFA500]'>Filling</span>Future</h1>
        <div className=' mb-4 flex flex-row items-center justify-center text-center w-full'>
          <button className='w-[40%] py-3 mr-7 bg-[#3A579D] text-white rounded-sm flex flex-row items-center justify-center'>
            <FaFacebookF className='mr-4' /> Log in 
          </button>
          <button className='w-[40%] py-3 bg-[#4285F4] text-white rounded-sm flex flex-row items-center justify-center'>
            <FaGoogle className='mr-4' /> Log in 
          </button>
        </div>
        <button className='w-[95%] mb-4  px-6 py-2 border border-black text-[#002844] rounded-lg flex flex-row items-center justify-center mx-auto'>
          <FaApple className='mr-2' /> Continue with Apple
        </button>
        <button className='w-[95%] px-6 py-2 bg-[#03314B] text-white rounded-lg flex items-center justify-center mx-auto'>
           Login with SSO
        </button>
        <div className='flex w-full items-center justify-center my-4'>
        <hr className='w-[39%] border-t-2 border-[#BAC8CE]' />
        <p className='px-4'>or</p>
        <hr className='w-[39%] border-t-2 border-[#BAC8CE]' />
      </div>
      <input type="text" placeholder="Email"    className=' pr-5 md:pr-20 pl-5 py-2 ml-2 border border-[#BAC8CE] rounded-sm my-4 text-start'/>
      <input type="text" placeholder="Password" className='pr-5 md:pr-20 pl-5 py-2 ml-2 border border-[#BAC8CE] rounded-sm text-start'/>
      <button className='w-[95%] px-6 py-2  bg-[#FFA500] text-white rounded-lg flex items-center justify-center mx-auto my-4'>
        Login with email
       </button>
        <p className='text-center text-[#3387ED] text-sm mb-8'>Forgot your password?</p>
        <Link to ="/signup"><p className='text-center text-[#3387ED] text-sm'>You don’t have an account?</p></Link>
      </div>
    </div>
  )
}

export default Login

