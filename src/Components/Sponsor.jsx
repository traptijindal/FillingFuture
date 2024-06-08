// import React from 'react'
// import sponsor from '/R_1.png'


// const Sponsor = () => {
//   return (
//     <div className='flex flex-col-reverse md:flex-row mt-20 items-center justify-center'>
//       <div className="left w-[60%] md:w-[40%] text-base md:px-24 md:ml-36 md:mr-36 flex flex-col items-start justify-center">
//           <h2 className='font-bold text-xl mb-2'>Become Sponsor</h2>
//           <p className='text-base mb-4'>Your support is crucial. Join us in this important cause and be a part of something much bigger than ourselves. Together, lets feed the hungry and make a difference in the lives of countless individuals and families. </p>
//           <button className='bg-[#FFA500] px-10 py-2 rounded-xl text-white'>Sponsor Project</button>
//       </div>
//       <div className="right w-[70%] md:w-[60%] ">
//           <img src={sponsor} alt="" className='w-full mb-6'/>
//       </div>
//     </div>
//   )
// }

// export default Sponsor

import React from 'react';
import sponsor from '/R_1.png';

const Sponsor = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row mt-20 items-center  md:items-center justify-end'>
      <div className="left w-[90%] md:w-[40%] text-base px-6 md:px-8 flex flex-col items-start justify-center">
        <h2 className='font-bold text-xl mb-2'>Become Sponsor</h2>
        <p className='text-base mb-4'>
          Your support is crucial. Join us in this important cause and be a part of something much bigger than ourselves. Together, let's feed the hungry and make a difference in the lives of countless individuals and families.
        </p>
        <button className='bg-[#FFA500] px-10 py-2 rounded-xl text-white'>Sponsor Project</button>
      </div>
      <div className="right w-[90%] md:w-[50%] flex justify-center md:justify-end">
        <img src={sponsor} alt="Sponsor" className='w-full md:w-auto mb-6 md:mb-0'/>
      </div>
    </div>
  );
}

export default Sponsor;


