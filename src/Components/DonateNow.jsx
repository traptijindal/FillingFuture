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
   <>
    <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1D3C49] mt-4 text-center md:text-start md:ml-40 underline underline-offset-8 decoration-4 decoration-[#FFA500]'>Donate Now</h2>
    <div className='flex flex-col items-center justify-center'>
     <div className='flex flex-col md:flex-row items-center justify-center lg:gap-32'>
        {donate.map((item,index)=>{
           return(
            <div key={index} className='h-[350px]'>
                <img src={item.image} alt="" className='w-[290px] h-[270px] lg:w-[370px] lg:h-[290px] mt-20 '/>
                <p className='text-center text-lg'>{item.text}</p>
            </div>
           )
        })}
      
      </div>
    </div>
   </>
  )
}

export default DonateNow
