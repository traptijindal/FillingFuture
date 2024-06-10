import React from 'react'


const donate=[
    {
        image:"/Ellipse 1.png",
        text:"Once",
    },
    {
        image:"/donate1.png",
        text:"Monthly",
    }
]

const DonateNow = () => {
  return (
   <div className='mb-10'>
    <h2 className='text-3xl lg:text-4xl font-bold text-[#1D3C49] mt-4 text-center md:text-start  md:ml-40 underline underline-offset-8 decoration-8 decoration-[#FFA500] '>Donate Now</h2>
    <div className='flex flex-col items-center justify-center'>
     <div className='flex flex-col md:flex-row items-center justify-center '>
        {donate.map((item,index)=>{
           return(
            <div key={index} >
                <img src={item.image} alt="" className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mt-20 '/>
                <p className='text-center text-3xl font-bold text-[#1D3C49]'>{item.text}</p>
            </div>
           )
        })}
      
      </div>
    </div>
   </div>
  )
}

export default DonateNow
