import React from 'react';

const Sponsor_Food = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4'>
      <h1 className='text-[#1D3C49] text-xl md:text-2xl lg:text-3xl font-bold text-center my-4 md:my-6 lg:my-8'>
        How food project sponsorship works
      </h1>
      <p className='text-sm md:text-base lg:text-lg text-center max-w-2xl mb-6'>
        While building a food project is no simple task, we think sponsoring one should be. Here are three steps you can expect:
      </p>
      <div className="relative hidden md:flex items-center justify-center w-full max-w-4xl my-8">
        <div className="absolute w-full h-0.5 bg-[#FFA500]"></div>
        <div className="relative w-full flex justify-between">
          <div className="absolute left-0 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-[#FFA500] rounded-full"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-[#FFA500] rounded-full"></div>
          <div className="absolute right-0 transform translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-[#FFA500] rounded-full"></div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between w-full max-w-6xl mx-auto'>
        <div className='text-center border-b border-[#d3cdcd] md:border-none pb-4 md:pb-0'>
          <h2 className='font-bold text-base md:text-lg lg:text-xl mb-2 text-[#1D3C49]'>
            You make a donation
          </h2>
          <p className='text-sm md:text-base lg:text-lg'>
            On average, projects start at $10,000 and can cost $25,000 or more depending on the location and project type.
          </p>
        </div>
        <div className='text-center border-b border-[#d3cdcd] md:border-none pb-4 md:pb-0'>
          <h2 className='font-bold text-base md:text-lg lg:text-xl mb-2 text-[#1D3C49]'>
            We match you with a food project
          </h2>
          <p className='text-sm md:text-base lg:text-lg'>
            A member of our team will be in touch to allocate your donation to an appropriate food project.
          </p>
        </div>
        <div className='text-center  pb-4 md:pb-0'>
          <h2 className='font-bold text-base md:text-lg lg:text-xl mb-2 text-[#1D3C49]'>
            You receive Progress Reports
          </h2>
          <p className='text-sm md:text-base lg:text-lg'>
            The average water project takes 21+ months to complete. We’ll keep you updated along the way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sponsor_Food;


