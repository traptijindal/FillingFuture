import React from 'react';
import sponsor from '/R_1.png';

const FoodResponsive= () => {
  return (
    <div className='flex flex-col-reverse md:flex-row mt-6 md:mt-20 items-center md:items-center justify-end '>

      <div className="left w-[90%] md:w-[30%] text-base  mx-4 md:px-14 px-4 py-4 flex flex-col items-center justify-center rounded-xl shadow-md shadow-[rgb(136,134,134)]">    
         <h1 className='text-xl font-bold mb-2 text-center text-[#1D3C49]'>Food Project Sponsorship</h1>
         <p className='text-base mb-8'>By sponsoring a project, you can provide hygienic food for a community, school, or health clinic. 100% of your donation will fund hygienic food.</p>
         <input type="number " placeholder='Enter amount' className='mb-8 border border-b-slate-300 p-2'/>
         <button className='bg-[#FFA500] px-10 py-2 rounded-xl text-white mb-8'>Donate</button>
         <p className='mb-8 text-sm'>*Minimum donation must be of $4599</p>
         <p className='text-sm  text-center mb-4'>Secure Payment · This site is protected by reCAPTCHA and the Google <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.</p>
      </div>

      <div className="right w-[90%] md:w-[50%] flex justify-center md:justify-end">
        <img src={sponsor} alt="Sponsor" className='w-full md:w-auto mb-6 md:mb-0'/>
      </div>
    </div>
  );
}

export default FoodResponsive;





